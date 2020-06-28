import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SyncLoader from 'react-spinners/SyncLoader';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import M from 'materialize-css';
import { fetchCities } from '../../redux/actions/citiesAction';
import { oncreateAccommodation } from '../../redux/actions/accommodationActions';
import { imageUpload } from '../../services/cloudinaryService';

export const RemoveButton = (props) => {
  return (
    <button
      className='btn-floating btn-small waves-effect waves-light tooltipped" red right'
      type='button'
      onClick={(e) => props.remove(e, props.item, props.index)}
      data-tooltip='Remove item'>
      <i className='material-icons'>remove</i>
    </button>
  );
};

export const AddButton = (props) => {
  return (
    <button
      className='btn-floating waves-effect waves-light tooltipped" add-btn right'
      type='button'
      onClick={(e) => props.add(e, props.item)}
      data-tooltip='Add item'>
      <i className='material-icons'>add</i>
    </button>
  );
};

export class AccommodationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [{}],
      services: [{}],
      images: [{}],
      rooms: [{ image: {} }],
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

  onRoomCaptionInputChange = (e, index) => {
    const { value } = e.target;
    const { rooms } = this.state;
    rooms[index].image.details = value;
    this.setState({
      rooms,
    });
  };

  onImageUpload = async (e, item, index) => {
    const file = e.target.files;
    this.setState({ uploading: true, tip: item });
    const res = await imageUpload(file);
    this.setState({ uploading: false });
    /* istanbul ignore next */
    if (res.error) {
      this.setState({
        error: true,
        message: res.message,
        tip: item,
      });
    } else {
      if (item === 'rooms') {
        const { rooms } = this.state;
        rooms[index].image.url = res.secure_url;
        this.setState({
          rooms,
          error: false,
          message: false,
        });
      } else {
        const { images } = this.state;
        images[index].url = res.secure_url;
        this.setState({
          images,
          error: false,
          message: false,
        });
      }
    }
  };

  addItem = (e, item) => {
    this.setState(
      item === 'rooms'
        ? { [item]: [...this.state[item], { image: {} }] }
        : { [item]: [...this.state[item], {}] },
    );
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
    await this.props.accommodationProcess(accommodationData);

    /* istanbul ignore next */
    if (this.props.accomCreateResponse.error) {
    } else {
      document.getElementById('createAccommodationForm').reset();
      this.setState({
        name: null,
        owner: null,
        type: null,
        location: null,
        images: [{}],
        services: [{}],
        rooms: [{ image: {} }],
      });
      toast.info(this.props.accomCreateResponse.payload.message);
    }
  };

  render() {
    const cities = this.props.cities.data || [];
    return (
      <div>
        <form
          id='createAccommodationForm'
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
                  required
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
                  required
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
                  required
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
                  required
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
                      required
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
                    <RemoveButton
                      remove={this.removeItem}
                      index={index}
                      item='services'
                    />
                  ) : null}
                </div>
              ))}
              {this.state.services.length < 11 ? (
                <AddButton item='services' add={this.addItem} />
              ) : null}
            </div>

            <div className='row card accImages' id='textInput'>
              <h6 className='headings'>Accommodation Images</h6>
              {this.state.images.map((image, index) => (
                <div className='row' key={index}>
                  {this.state.uploading && this.state.tip === 'images' ? (
                    <div className='progress'>
                      <div className='indeterminate'></div>
                    </div>
                  ) : null}

                  {image.url ? (
                    <div className='image-view m6 s12'>
                      <img src={image.url} className='responsive-img' />
                    </div>
                  ) : (
                    <div
                      className='file-field input-field col m6 s12'
                      style={{ marginTop: '20px' }}>
                      <div className='btn'>
                        <input
                          type='file'
                          accept='image/*'
                          required
                          onChange={(e) =>
                            this.onImageUpload(e, 'images', index)
                          }
                        />
                        <i className='material-icons'>folder</i>
                      </div>

                      <div className='file-path-wrapper'>
                        <input
                          className='file-path validate'
                          type='text'
                          placeholder='Upload image'
                        />
                        {
                          /* istanbul ignore next */
                          this.state.error && this.state.tip === 'images' ? (
                            <span className='red-text'>
                              {this.state.message}
                            </span>
                          ) : null
                        }
                      </div>
                    </div>
                  )}
                  <div
                    className='input-field col s12 m6'
                    style={{ marginTop: '20px' }}>
                    <input
                      name='details'
                      id={`images${index}`}
                      type='text'
                      className='validate'
                      testdata='inputChange'
                      onChange={(e) =>
                        this.onItemsInputChange(e, 'images', index)
                      }
                      disabled={this.props.accomCreateResponse.loading}
                    />
                    <label htmlFor={`images${index}`}>Image Caption</label>
                  </div>

                  {this.state.images.length !== 1 ? (
                    <RemoveButton
                      remove={this.removeItem}
                      index={index}
                      item='images'
                    />
                  ) : null}
                </div>
              ))}
              {this.state.images.length < 5 ? (
                <AddButton item='images' add={this.addItem} />
              ) : null}
            </div>

            <div className='row rooms' id='textInput'>
              <h6 className='headings'>Rooms</h6>
              {this.state.rooms.map((room, index) => (
                <div className='row card room' key={index}>
                  <div className='col s12 m8 image-part'>
                    {this.state.uploading && this.state.tip === 'rooms' ? (
                      <div class='progress'>
                        <div class='indeterminate'></div>
                      </div>
                    ) : null}

                    {room.image.url ? (
                      <div className='image-view'>
                        <img src={room.image.url} className='responsive-img' />
                      </div>
                    ) : (
                      <div className='file-field input-field'>
                        <div className='btn'>
                          <input
                            type='file'
                            accept='image/*'
                            required
                            onChange={(e) =>
                              this.onImageUpload(e, 'rooms', index)
                            }
                          />
                          <i className='material-icons'>folder</i>
                        </div>

                        <div className='file-path-wrapper'>
                          <input
                            className='file-path validate'
                            type='text'
                            placeholder='Upload image'
                          />
                          {
                            /* istanbul ignore next */
                            this.state.error && this.state.tip === 'rooms' ? (
                              <span className='red-text'>
                                {this.state.message}
                              </span>
                            ) : null
                          }
                        </div>
                      </div>
                    )}

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
                          this.onRoomCaptionInputChange(e, index)
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
                          required
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
                          required
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
                          required
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
                          required
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
                    <RemoveButton
                      remove={this.removeItem}
                      index={index}
                      item='rooms'
                    />
                  ) : null}
                </div>
              ))}
              <AddButton item='rooms' add={this.addItem} />
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
                disabled={
                  this.props.accomCreateResponse.loading ||
                  !this.state.name ||
                  !this.state.location ||
                  !this.state.type ||
                  !this.state.owner
                }>
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
