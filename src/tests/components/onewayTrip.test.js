import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import OnewayTripComponent from '../../components/trips/createOnewayTrip';
import OnewayTripFormDefault from '../../components/trips/onewayTripForm';
import { OnewayTripForm } from '../../components/trips/onewayTripForm';
import configureStore from '../../redux/configureStore';

describe('Test <create onway trip/> Component', () => {
  it('Should render component correctly', () => {
    const tripComponent = shallow(<OnewayTripComponent />);
    expect(toJson(tripComponent)).toMatchSnapshot();
    expect(tripComponent.length).toBe(1);
  });
});

describe('Test <oneway trip form/> Component', () => {
  const store = configureStore();
  let onFormSubmit;
  beforeEach(() => {
    onFormSubmit = jest.fn();
  });

  it('Should render the oneway trip form correctly', () => {
    const store = mockStore([thunk])({
      onewayTrip: {
        loading: false,
        error: false,
        message: '',
      },
      cities: [],
    });

    const wrapper = mount(
      <Provider store={store}>
        <OnewayTripFormDefault />
      </Provider>,
    );

    const handleSubmit = jest.spyOn(
      wrapper.find('[testdata="onewayTripForm"]').props(),
      'onSubmit',
    );
    wrapper.find('[testdata="onewayTripForm"]').props().onSubmit();
    expect(wrapper).toMatchSnapshot();
    expect(handleSubmit).toHaveBeenLastCalledWith();
  });

  it('Should test form inputs on change', () => {
    const wrapper = mount(
      <Provider store={store}>
        <OnewayTripFormDefault />
      </Provider>,
    );

    wrapper
      .find('select')
      .at(0)
      .simulate('change', {
        target: { id: 'origin', value: 'bujumbura', name: 'origin' },
      });
    wrapper
      .find('select')
      .at(1)
      .simulate('change', {
        target: { id: 'destination', value: 'kigali', name: 'destination' },
      });
    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { id: 'date', value: '2020-10-10', name: 'date' },
      });

    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { id: 'returnDate', value: '2020-10-11', name: 'returnDate' },
      });
    wrapper
      .find('input')
      .at(2)
      .simulate('change', {
        target: { id: 'travelReason', value: 'vacation', name: 'travelReason' },
      });

    expect(wrapper.length).toBe(1);
  });

  it('Should handle form submit process', () => {
    const form = shallow(
      <OnewayTripForm
        citiesProcess={jest.fn()}
        tripProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        tripResponse={{ loading: false, error: false }}
      />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = form.instance();
    instance.setState({
      origin: 'kigali',
      destination: 'bujumbura',
      date: '2020-10-10',
      error: false,
      returnDate: '2020-10-11',
    });
    instance.handleSubmit(env);
    expect(instance.state).toEqual({
      origin: 'kigali',
      destination: 'bujumbura',
      date: '2020-10-10',
      error: false,
      returnDate: '2020-10-11',
    });
  });
  it('Should handle form submit process', () => {
    const form2 = shallow(
      <OnewayTripForm
        citiesProcess={jest.fn()}
        tripProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        tripResponse={{ loading: true, error: true }}
      />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = form2.instance();
    instance.setState({
      origin: 'kigali',
      destination: 'bujumbura',
      date: '2020-10-10',
      error: false,
      returnDate: '2020-10-11',
    });
    instance.handleSubmit(env);
    expect(instance.state).toEqual({
      origin: 'kigali',
      destination: 'bujumbura',
      date: '2020-10-10',
      error: false,
      returnDate: '2020-10-11',
    });
  });
  it('Should handle form submit process', () => {
    const form3 = shallow(
      <OnewayTripForm
        citiesProcess={jest.fn()}
        tripProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        tripResponse={{ loading: true, error: true }}
      />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = form3.instance();
    instance.setState({
      origin: 'kigali',
      destination: 'kigali',
      date: '2020-10-10',
      error: false,
      returnDate: '2020-10-11',
    });
    instance.handleSubmit(env);
    expect(instance.state.error).toEqual(true);
  });
  it('Should handle form submit process', () => {
    const form4 = shallow(
      <OnewayTripForm
        citiesProcess={jest.fn()}
        tripProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        tripResponse={{ loading: true, error: true }}
      />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = form4.instance();
    instance.setState({
      origin: 'kigali',
      destination: 'bujumbura',
      date: '2020-10-10',
      error: false,
      returnDate: '2020-09-09',
    });
    instance.handleSubmit(env);
    expect(instance.state.error).toEqual(true);
  });
  it('Should handle form submit process', () => {
    const form5 = shallow(
      <OnewayTripForm
        citiesProcess={jest.fn()}
        tripProcess={jest.fn()}
        cities={{
          data: [
            { id: 1, city: 'kigali' },
            { id: 1, city: 'bujumbura' },
          ],
        }}
        tripResponse={{ loading: true, error: true }}
      />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = form5.instance();
    instance.setState({
      origin: 'kigali',
      destination: 'bujumbura',
      date: '2020-02-02',
      error: false,
      returnDate: '2020-09-09',
    });
    instance.handleSubmit(env);
    expect(instance.state.error).toEqual(true);
  });
});
