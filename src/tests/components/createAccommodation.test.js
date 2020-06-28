import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CreateAccomodationComponent from '../../components/accommodations/createAccommodation';
import CreateAccomodationFormDefault, {
  AddButton,
} from '../../components/accommodations/accommodationForm';
import { AccommodationForm } from '../../components/accommodations/accommodationForm';
import configureStore from '../../redux/configureStore';
import { RemoveButton } from '../../components/accommodations/accommodationForm';

describe('Test <create accommodation/> Component', () => {
  it('Should render component correctly', () => {
    const accomodatioComponent = shallow(<CreateAccomodationComponent />);
    expect(toJson(accomodatioComponent)).toMatchSnapshot();
    expect(accomodatioComponent.length).toBe(1);
  });
});

describe('Test <create Accommodation form/> Component', () => {
  const store = configureStore();
  let handleSubmit;
  beforeEach(() => {
    handleSubmit = jest.fn();
  });

  it('Should render the create accommodation form correctly', () => {
    const store = mockStore([thunk])({
      accomCreateResponse: {
        loading: false,
        error: false,
        message: '',
      },
      cities: [],
    });

    const wrapper = mount(
      <Provider store={store}>
        <CreateAccomodationFormDefault />
      </Provider>,
    );

    const handleSubmit = jest.spyOn(
      wrapper.find('[testdata="createAccommodationForm"]').props(),
      'onSubmit',
    );

    wrapper.find('[testdata="createAccommodationForm"]').props().onSubmit();
    expect(wrapper).toMatchSnapshot();
    expect(handleSubmit).toHaveBeenLastCalledWith();
  });

  it('Should render add and remove buttons', () => {
    const wraper = mount(<RemoveButton remove={jest.fn()} index={0} />);
    const wraper2 = mount(<AddButton add={jest.fn()} item='' />);
    wraper.find('button').at(0).simulate('click');
    wraper2.find('button').at(0).simulate('click');
    expect(wraper.length).toBe(1);
    expect(wraper2.length).toBe(1);
  });

  it('Should test form inputs on change', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CreateAccomodationFormDefault />
      </Provider>,
    );

    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { value: 'name', name: 'name' },
      });
    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { value: 'owner', name: 'owner' },
      });
    wrapper
      .find('input')
      .at(2)
      .simulate('change', {
        target: { value: 'additionals', name: 'description' },
      });
    wrapper
      .find('input')
      .at(3)
      .simulate('change', {
        target: { value: 'additionals', name: 'name' },
      });
    wrapper
      .find('input')
      .at(4)
      .simulate('change', {
        target: { value: 'additionals', name: 'cost' },
      });
    wrapper
      .find('input')
      .at(5)
      .simulate('change', {
        target: { value: 'additionals', name: 'details' },
      });
    wrapper
      .find('input')
      .at(6)
      .simulate('change', {
        target: { value: 'additionals' },
      });
    wrapper
      .find('input')
      .at(7)
      .simulate('change', {
        target: { value: 'additionals' },
      });
    wrapper
      .find('input')
      .at(8)
      .simulate('change', {
        target: { value: 'additionals', name: 'details' },
      });
    wrapper
      .find('input')
      .at(9)
      .simulate('change', {
        target: { value: 'additionals' },
      });
    wrapper
      .find('input')
      .at(10)
      .simulate('change', {
        target: { value: 'additionals' },
      });
    wrapper
      .find('input')
      .at(11)
      .simulate('change', {
        target: { value: 'additionals', name: 'name' },
      });
    wrapper
      .find('input')
      .at(12)
      .simulate('change', {
        target: { value: 'additionals', name: 'roomNumber' },
      });
    wrapper
      .find('input')
      .at(13)
      .simulate('change', {
        target: { value: 'additionals', name: 'cost' },
      });
    wrapper
      .find('input')
      .at(14)
      .simulate('change', {
        target: { value: 'additionals', name: 'similarRooms' },
      });
    wrapper
      .find('input')
      .at(15)
      .simulate('change', {
        target: { value: 'additionals', name: 'similarRooms' },
      });
    wrapper
      .find('select')
      .at(0)
      .simulate('change', {
        target: { value: 'location', name: 'location' },
      });
    wrapper
      .find('select')
      .at(1)
      .simulate('change', {
        target: { value: 'type', name: 'type' },
      });
    wrapper
      .find('select')
      .at(2)
      .simulate('change', {
        target: { value: 'status', name: 'status' },
      });
    wrapper
      .find('select')
      .at(3)
      .simulate('change', {
        target: { value: 'status', name: 'type' },
      });
    wrapper
      .find('select')
      .at(4)
      .simulate('change', {
        target: { value: 'status', name: 'status' },
      });
    expect(wrapper.length).toBe(1);
  });

  it('Should test buttons on click', () => {
    const wrapper = mount(
      <Provider store={store}>
        <CreateAccomodationFormDefault />
      </Provider>,
    );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(3).simulate('click');
    expect(wrapper.length).toBe(1);
  });

  it('Should handle form submit process', () => {
    const form = shallow(
      <AccommodationForm
        citiesProcess={jest.fn()}
        accommodationProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        accomCreateResponse={{ loading: true, error: false }}
      />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = form.instance();
    const data = {
      name: 'kigali',
      location: 'bujumbura',
      type: 'VIP',
      status: '',
      description: '',
      owner: '',
      services: [],
      images: [],
      rooms: [],
    };
    instance.setState({ ...data });
    instance.handleSubmit(env);
    expect(instance.state).toEqual(data);
  });

  it('Should handle form methods process', () => {
    const form = shallow(
      <AccommodationForm
        citiesProcess={jest.fn()}
        accommodationProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        accomCreateResponse={{ loading: false, error: false }}
      />,
    );
    const instance = form.instance();
    instance.removeItem(null, 'images', 0);
    instance.removeItem(null, 'services', 0);
    instance.addItem(null, 'services');
    instance.onRoomCaptionInputChange({ target: { value: '' } }, 0);
    instance.onItemsInputChange(
      { target: { value: '', name: 'name' } },
      'services',
      0,
    );
    instance.onItemsInputChange(
      { target: { value: '', name: 'name' } },
      'rooms',
      0,
    );
    instance.setState({ images: [{}] });
    instance.onItemsInputChange(
      { target: { value: '', name: 'details' } },
      'images',
      0,
    );
    instance.removeItem(null, 'rooms', 0);
    instance.onImageUpload({ target: { files: [] } }, 'images', 0);
    instance.onImageUpload({ target: { files: [] } }, 'rooms', 0);
    expect(instance.state.services.length).toEqual(1);
    instance.setState({
      services: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    });
    expect(instance.state.services.length).toEqual(13);
    instance.setState({ images: [{ url: 'google.com' }] });
    expect(instance.state.images.length).toBe(1);
    instance.setState({ images: [{}, {}] });
    expect(instance.state.images.length).toBe(2);
    instance.setState({ images: [{}, {}, {}, {}, {}, {}] });
    expect(instance.state.images.length).toBe(6);
    instance.setState({ rooms: [{ image: { url: 'url.com' } }] });
    expect(instance.state.rooms.length).toBe(1);
    instance.setState({ error: true });
    expect(instance.state.error).toBe(true);

    const form4 = shallow(
      <AccommodationForm
        citiesProcess={jest.fn()}
        accommodationProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        accomCreateResponse={{ loading: true, error: true }}
      />,
    );
    expect(form4).toMatchSnapshot();
  });
});
