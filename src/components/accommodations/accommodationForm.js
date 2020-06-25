import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SyncLoader from 'react-spinners/SyncLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css';
import { fetchCities } from '../../redux/actions/citiesAction';
import { oncreateAccommodation } from '../../redux/actions/accommodations';

export class AccommodationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{}],
      services: [{}],
      images: [{}],
      rooms: [{}],
    };
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

  onItemsInputChange = (e, item, index) => {
    const { name, value } = e.target;
    const currentItem = this.state[item];
    currentItem[index][name] = value;
    this.setState({
      [item]: currentItem,
    });
  };

  addItem = (e, item) => {
    this.setState({ [item]: [...this.state[item], {}] });
  };

  removeItem = (event, item, index) => {
    const currentItem = this.state[item];
    currentItem.splice(index, 1);
    this.setState({ [item]: currentItem });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const accommodationData = {
      name: this.state.name,
      location: this.state.location,
      description: this.state.description,
      owner: this.state.owner,
      status: this.state.status,
      type: this.state.type,
      services: this.state.services,
      images: this.state.images,
      rooms: this.state.rooms,
    };
    console.log(accommodationData);
    await this.props.accommodationProcess(accommodationData);

    /* istanbul ignore next */
    if (this.props.accomCreateResponse.error) {
    } else {
      document.getElementById('createAccommodationForm').reset();
      toast.info(this.props.accomCreateResponse.payload.message);
    }
  };

  render() {
    const cities = this.props.cities.data || [];
    return (
      <div>
        <form
          id='createAccommodationForm'
          className='col s12 container center'
          testdata='createAccommodationForm'
          onSubmit={this.handleSubmit}>
          <div className='form-content'>
            <div className='row' id='textInput'>
              <div className='input-field col s12 m6'>
                <input
                  name='name'
                  id='name'
                  type='text'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.onInputChange}
                  disabled={this.props.accomCreateResponse.loading}
                />
                <label htmlFor='name'>Name</label>
              </div>
              <div className='input-field col s12 m6' id='onwerField'>
                <input
                  name='owner'
                  id='owner'
                  type='text'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.onInputChange}
                  disabled={this.props.accomCreateResponse.loading}
                />
                <label htmlFor='owner'>Owner</label>
              </div>
            </div>
            <div className='row' id='textInput'>
              <div
                className='input-field col s12 m6'
                style={{ marginTop: '20px' }}>
                <select
                  name='location'
                  className='validate'
                  disabled={this.props.accomCreateResponse.loading}
                  onChange={this.onInputChange}>
                  <option defaultValue='none'>Choose Location</option>
                  {cities.map((value) => (
                    <option key={value.id} value={value.city}>
                      {value.city}
                    </option>
                  ))}
                </select>
                <label htmlFor='location'>Location</label>
              </div>
              <div
                className='input-field col s12 m6'
                style={{ marginTop: '20px' }}>
                <select
                  name='type'
                  className='validate'
                  disabled={this.props.accomCreateResponse.loading}
                  onChange={this.onInputChange}>
                  <option defaultValue='none'>Choose type</option>
                  <option value='Mansion'>Mansion</option>
                  <option value='Hotel'>Hotel</option>
                  <option value='Guest House'>Guest House</option>
                </select>
                <label htmlFor='type'>Type</label>
              </div>
            </div>
            <div className='row' id='textInput'>
              <div
                className='input-field col s12 m6'
                style={{ marginTop: '20px' }}>
                <select
                  name='status'
                  className='validate'
                  disabled={this.props.accomCreateResponse.loading}
                  onChange={this.onInputChange}>
                  <option defaultValue='none'>Choose status</option>
                  <option value='available'>Available</option>
                  <option value='booked'>Booked</option>
                </select>
                <label htmlFor='status'>Status</label>
              </div>
              <div
                className='input-field col s12 m6'
                style={{ marginTop: '20px' }}>
                <input
                  name='description'
                  id='description'
                  type='text'
                  className='validate'
                  testdata='inputChange'
                  onChange={this.onInputChange}
                  disabled={this.props.accomCreateResponse.loading}
                />
                <label htmlFor='description'>Additional Info</label>
              </div>
            </div>

            <div className='row services'>
              <h6 className='headings'>Services</h6>
              {this.state.services.map((service, index) => (
                <div className='row card service' id='textInput' key={index}>
                  <div
                    className='input-field col s12 m4'
                    style={{ marginTop: 20 }}>
                    <input
                      name='name'
                      id={`serviceName${index}`}
                      type='text'
                      className='validate'
                      testdata='inputChange'
                      onChange={(e) =>
                        this.onItemsInputChange(e, 'services', index)
                      }
                      disabled={this.props.accomCreateResponse.loading}
                    />
                    <label htmlFor={`serviceName${index}`}>Sevice Name</label>
                  </div>
                  <div
                    className='input-field col s12 m4'
                    style={{ marginTop: 20 }}>
                    <input
                      name='cost'
                      id={`serviceCost${index}`}
                      type='text'
                      className='validate'
                      testdata='inputChange'
                      onChange={(e) =>
                        this.onItemsInputChange(e, 'services', index)
                      }
                      disabled={this.props.accomCreateResponse.loading}
                    />
                    <label htmlFor={`serviceCost${index}`}>Sevice Cost</label>
                  </div>
                  <div
                    className='input-field col s12 m4'
                    style={{ marginTop: 20 }}>
                    <input
                      name='description'
                      id={`serviceDetails${index}`}
                      type='text'
                      className='validate'
                      testdata='inputChange'
                      onChange={(e) =>
                        this.onItemsInputChange(e, 'services', index)
                      }
                      disabled={this.props.accomCreateResponse.loading}
                    />
                    <label htmlFor={`serviceDetails${index}`}>
                      Sevice Details
                    </label>
                  </div>
                  {this.state.services.length !== 1 ? (
                    <button
                      className='btn-floating btn-small waves-effect waves-light tooltipped" red right'
                      type='button'
                      onClick={(e) => this.removeItem(e, 'services', index)}
                      data-tooltip='Remove service'>
                      <i className='material-icons'>remove</i>
                    </button>
                  ) : null}
                </div>
              ))}
              {this.state.services.length < 11 ? (
                <button
                  className='btn-floating waves-effect waves-light tooltipped" add-btn right'
                  type='button'
                  onClick={(e) => this.addItem(e, 'services')}
                  data-tooltip='Add service'>
                  <i className='material-icons'>add</i>
                </button>
              ) : null}
            </div>

            <div className='row card accImages' id='textInput'>
              <h6 className='headings'>Accommodation Images</h6>
              {this.state.images.map((image, index) => (
                <div className='row' key={index}>
                  <div
                    className='file-field input-field col m6 s12'
                    style={{ marginTop: '20px' }}>
                    <div className='btn'>
                      <input type='file' accept='image/*' />
                      <i className='material-icons'>folder</i>
                    </div>

                    <div className='file-path-wrapper'>
                      <input
                        className='file-path validate'
                        type='text'
                        placeholder='Upload image'
                      />
                    </div>
                  </div>
                  <div
                    className='input-field col s12 m6'
                    style={{ marginTop: '20px' }}>
                    <input
                      name='imageDesc'
                      id='imageDesc'
                      type='text'
                      className='validate'
                      testdata='inputChange'
                      onChange={this.onInputChange}
                      disabled={this.props.accomCreateResponse.loading}
                    />
                    <label htmlFor='imageDesc'>Image Caption</label>
                  </div>

                  {this.state.images.length !== 1 ? (
                    <button
                      className='btn-floating btn-small waves-effect waves-light tooltipped" red right'
                      type='button'
                      onClick={(e) => this.removeItem(e, 'images', index)}
                      data-tooltip='Remove image'>
                      <i className='material-icons'>remove</i>
                    </button>
                  ) : null}
                </div>
              ))}
              {this.state.images.length < 5 ? (
                <button
                  className='btn-floating waves-effect waves-light tooltipped" add-btn right'
                  type='button'
                  onClick={(e) => this.addItem(e, 'images')}
                  data-tooltip='Add service'>
                  <i className='material-icons'>add</i>
                </button>
              ) : null}
            </div>

            <div className='row rooms' id='textInput'>
              <h6 className='headings'>Rooms</h6>
              {this.state.rooms.map((room, index) => (
                <div className='row card room' key={index}>
                  <div className='col s12 m8 image-part'>
                    <div className='file-field input-field'>
                      <div className='btn'>
                        <input type='file' accept='image/*' />
                        <i className='material-icons'>folder</i>
                      </div>

                      <div className='file-path-wrapper'>
                        <input
                          className='file-path validate'
                          type='text'
                          placeholder='Upload image'
                        />
                      </div>
                    </div>

                    <div
                      className='input-field col s12 '
                      style={{ marginTop: 30 }}>
                      <input
                        name='details'
                        id={`image${index}`}
                        type='text'
                        className='validate'
                        testdata='inputChange'
                        onChange={(e) =>
                          this.onItemsInputChange(e, 'rooms', index)
                        }
                        disabled={this.props.accomCreateResponse.loading}
                      />
                      <label htmlFor={`image${index}`}>Image Caption</label>
                    </div>
                  </div>
                  <div className='col s12 m4'>
                    <div className='row'>
                      <div
                        className='input-field col s12 '
                        style={{ marginTop: '20px' }}>
                        <input
                          name='name'
                          id={`name${index}`}
                          type='text'
                          className='validate'
                          testdata='inputChange'
                          onChange={(e) =>
                            this.onItemsInputChange(e, 'rooms', index)
                          }
                          disabled={this.props.accomCreateResponse.loading}
                        />
                        <label htmlFor={`name${index}`}>Room Name</label>
                      </div>
                      <div
                        className='input-field col s12 '
                        style={{ marginTop: '20px' }}>
                        <input
                          name='roomNumber'
                          id={`roomNumber${index}`}
                          type='text'
                          className='validate'
                          testdata='inputChange'
                          onChange={(e) =>
                            this.onItemsInputChange(e, 'rooms', index)
                          }
                          disabled={this.props.accomCreateResponse.loading}
                        />
                        <label htmlFor={`roomNumber${index}`}>
                          Room Number
                        </label>
                      </div>

                      <div
                        className='input-field col s12'
                        style={{ marginTop: '20px' }}>
                        <select
                          name='type'
                          id={`type${index}`}
                          className='validate'
                          disabled={this.props.accomCreateResponse.loading}
                          onChange={(e) =>
                            this.onItemsInputChange(e, 'rooms', index)
                          }>
                          <option defaultValue='none'>Choose type</option>
                          <option value='vip'>VIP</option>
                          <option value='medium'>Medium</option>
                          <option value='low level'>Low level</option>
                        </select>
                        <label htmlFor={`type${index}`}>Type</label>
                      </div>

                      <div
                        className='input-field col s12 '
                        style={{ marginTop: '20px' }}>
                        <input
                          name='cost'
                          id={`cost${index}`}
                          type='text'
                          className='validate'
                          testdata='inputChange'
                          onChange={(e) =>
                            this.onItemsInputChange(e, 'rooms', index)
                          }
                          disabled={this.props.accomCreateResponse.loading}
                        />
                        <label htmlFor={`cost${index}`}>Room Cost</label>
                      </div>
                      <div
                        className='input-field col s12 '
                        style={{ marginTop: '20px' }}>
                        <input
                          name='similarRooms'
                          id={`similarRooms${index}`}
                          type='number'
                          className='validate'
                          testdata='inputChange'
                          onChange={(e) =>
                            this.onItemsInputChange(e, 'rooms', index)
                          }
                          disabled={this.props.accomCreateResponse.loading}
                        />
                        <label htmlFor={`similarRooms${index}`}>
                          Similar Rooms
                        </label>
                      </div>
                      <div
                        className='input-field col s12'
                        style={{ marginTop: '20px' }}>
                        <select
                          name='status'
                          id={`roomStatus${index}`}
                          className='validate'
                          disabled={this.props.accomCreateResponse.loading}
                          onChange={(e) =>
                            this.onItemsInputChange(e, 'rooms', index)
                          }>
                          <option defaultValue='none'>Choose status</option>
                          <option value='available'>Available</option>
                          <option value='booked'>Booked</option>
                        </select>
                        <label htmlFor={`roomStatus${index}`}>Status</label>
                      </div>
                    </div>
                  </div>
                  {this.state.rooms.length !== 1 ? (
                    <button
                      className='btn-floating btn-small waves-effect waves-light tooltipped" red right'
                      type='button'
                      onClick={(e) => this.removeItem(e, 'rooms', index)}
                      data-tooltip='Remove room'>
                      <i className='material-icons'>remove</i>
                    </button>
                  ) : null}
                </div>
              ))}
              <button
                className='btn-floating waves-effect waves-light tooltipped" add-btn right'
                type='button'
                onClick={(e) => this.addItem(e, 'rooms')}
                data-tooltip='Add room'>
                <i className='material-icons'>add</i>
              </button>
            </div>

            <div className='contentFooter'>
              {this.state.error ? (
                <p className='error'>{this.state.message}</p>
              ) : this.props.accomCreateResponse.error ? (
                <p className='error'>
                  {this.props.accomCreateResponse.message}
                </p>
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
                disabled={this.props.accomCreateResponse.loading}>
                {this.props.accomCreateResponse.loading ? (
                  <SyncLoader
                    size={5}
                    margin={5}
                    color={'#fff'}
                    loading={this.props.accomCreateResponse.loading}
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

AccommodationForm.propTypes = {
  accommodationProcess: PropTypes.func.isRequired,
  citiesProcess: PropTypes.func.isRequired,
};

const mapStateToProps = (response) => ({
  cities: response.cities,
  accomCreateResponse: response.accomCreateResponse,
});
/* istanbul ignore next */
const mapDispatchToProps = (dispatch) => ({
  citiesProcess: () => dispatch(fetchCities()),
  accommodationProcess: (accommodationData) =>
    dispatch(oncreateAccommodation(accommodationData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationForm);
