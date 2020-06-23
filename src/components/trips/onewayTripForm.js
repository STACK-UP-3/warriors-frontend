import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SyncLoader from 'react-spinners/SyncLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css';
import { fetchCities } from '../../redux/actions/citiesAction';
import { onCreateTrip } from '../../redux/actions/tripActions';
import dataValidate from '../../helpers/tripDataValidate';

export class OnewayTripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.props.citiesProcess();
    M.AutoInit();
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const tripData = {
      origin: this.state.origin,
      destination: this.state.destination,
      date: this.state.date,
      returnDate: this.state.returnDate,
      travelReason: this.state.travelReason,
      accommodationID: this.state.accommodationID || 0,
    };
    const validated = dataValidate(tripData);
    if (validated.error) {
      this.setState({
        error: true,
        message: validated.message,
      });
    } else {
      this.setState({
        error: false,
      });

      await this.props.tripProcess(tripData);

      /* istanbul ignore next */
      if (this.props.tripResponse.error) {
      } else {
        document.getElementById('onewayTripForm').reset();
        this.setState({
          origin: null,
          destination: null,
          date: null,
          returnDate: null,
          travelReason: null,
        });
        toast.info(this.props.tripResponse.payload.message);
      }
    }
  };

  render() {
    const cities = this.props.cities.data || [];
    return (
      <div>
        <form
          id='onewayTripForm'
          className='col s12 container center'
          testdata='onewayTripForm'
          onSubmit={this.handleSubmit}>
          <div className='form-content'>
            <div className='row' id='textInput'>
              <div className='input-field col s12'>
                <select
                  name='origin'
                  className='validate'
                  disabled={this.props.tripResponse.loading}
                  onChange={this.onInputChange}>
                  <option defaultValue='none'>Choose your origin city</option>
                  {cities.map((value) => (
                    <option key={value.id} value={value.city}>
                      {value.city}
                    </option>
                  ))}
                </select>
                <label htmlFor='origin'>Your Origin</label>
              </div>
            </div>
            <div className='row' id='textInput'>
              <div
                className='input-field col s12'
                style={{ marginTop: '20px' }}>
                <select
                  name='destination'
                  className='validate'
                  disabled={this.props.tripResponse.loading}
                  onChange={this.onInputChange}>
                  <option defaultValue='none'>
                    Choose your destination city
                  </option>
                  {cities.map((value) => (
                    <option key={value.id} value={value.city}>
                      {value.city}
                    </option>
                  ))}
                </select>
                <label>Your Destination</label>
              </div>
            </div>
            <div className='row' id='textInput'>
              <div
                className='input-field col s12 m6'
                style={{ margin: '20px 0px' }}>
                <input
                  name='date'
                  id='date'
                  type='date'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.onInputChange}
                  disabled={this.props.tripResponse.loading}
                />
                <label htmlFor='date'>Leaving Date</label>
              </div>

              <div
                className='input-field col s12 m6'
                style={{ margin: '20px 0px' }}>
                <input
                  name='returnDate'
                  id='returnDate'
                  type='date'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.onInputChange}
                  disabled={this.props.tripResponse.loading}
                />
                <label htmlFor='returnDate'>Return Date</label>
              </div>
            </div>

            <div className='row' id='textInput'>
              <div className='input-field col s12'>
                <input
                  name='travelReason'
                  id='travelReason'
                  type='text'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.onInputChange}
                  disabled={this.props.tripResponse.loading}
                />
                <label htmlFor='travelReason'>Travel Reason</label>
              </div>
            </div>

            <div className='contentFooter'>
              {this.state.error ? (
                <p className='error'>{this.state.message}</p>
              ) : this.props.tripResponse.error ? (
                <p className='error'>{this.props.tripResponse.message}</p>
              ) : (
                <ToastContainer
                  position='top-center'
                  autoClose={false}
                  hideProgressBar={true}
                  newestOnTop={false}
                  closeOnClick
                  autoClose={8000}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
                />
              )}
            </div>
          </div>

          <div className='form-footer'>
            <div className='submitBtn'>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                id='submit'
                disabled={
                  !this.state.origin ||
                  !this.state.destination ||
                  !this.state.date ||
                  !this.state.travelReason ||
                  this.props.tripResponse.loading
                }>
                {this.props.tripResponse.loading ? (
                  <SyncLoader
                    size={5}
                    margin={5}
                    color={'#fff'}
                    loading={this.props.tripResponse.loading}
                  />
                ) : (
                  'Send Request'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

OnewayTripForm.propTypes = {
  tripProcess: PropTypes.func.isRequired,
  citiesProcess: PropTypes.func.isRequired,
};

const mapStateToProps = (response) => ({
  cities: response.cities,
  tripResponse: response.onewayTrip,
});
/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  citiesProcess: () => dispatch(fetchCities()),
  tripProcess: (tripData) => dispatch(onCreateTrip(tripData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnewayTripForm);
