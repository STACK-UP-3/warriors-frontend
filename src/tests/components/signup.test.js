import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Signup from '../../components/auth/Signup';
import SignupFormD from '../../components/auth/SignupForm';
import configureStore from '../../redux/configureStore';
import { SignupForm } from '../../components/auth/SignupForm';

describe('Test <SignupForm/> Component', () => {
  const store = configureStore();
  let onFormSubmit;
  beforeEach(() => {
    onFormSubmit = jest.fn();
  });

  it('Should render the signup form correctly', () => {
    const store = mockStore([thunk])({
      signup: {
        loading: false,
        error: false,
        message: '',
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <SignupFormD />
      </Provider>,
    );

    const handleSubmit = jest.spyOn(
      wrapper.find('[testdata="signupForm"]').props(),
      'onSubmit',
    );
    wrapper.find('[testdata="signupForm"]').props().onSubmit();
    expect(wrapper).toMatchSnapshot();
    expect(handleSubmit).toHaveBeenLastCalledWith();
  });

  it('Should test form inputs on change', () => {
    const testState = { email: 'aaa@bbbb.ccc', password: 'jjjjjjj' };
    const wrapper = mount(
      <Provider store={store}>
        <SignupFormD />
      </Provider>,
    );

    wrapper
      .find('input')
      .at(0)
      .simulate('change', {
        target: { id: 'firstname', value: 'name', name: 'firstname' },
      });

    wrapper
      .find('input')
      .at(1)
      .simulate('change', {
        target: { id: 'lastname', value: 'lastnamr', name: 'lastname' },
      });
    wrapper
      .find('input')
      .at(2)
      .simulate('change', {
        target: { id: 'email', value: 'xxx@yyy.zzz', name: 'email' },
      });

    wrapper
      .find('input')
      .at(3)
      .simulate('change', {
        target: { id: 'password', value: 'kkkkkkkk', name: 'password' },
      });

    expect(wrapper.length).toBe(1);
  });

  it('Should render signup page', () => {
    const page = shallow(<Signup />);
    expect(page).toMatchSnapshot();
  });

  it('Should handle signup process', () => {
    const signup = shallow(
      <SignupForm signupProcess={jest.fn()} signup={{ loading: false }} />,
    );
    const env = {
      preventDefault: jest.fn(),
    };
    const instance = signup.instance();
    instance.setState({
      firstname: 'first',
      lastname: 'lassr',
      email: 'email@yahoo.com',
      password: 'password123',
    });
    instance.handleSignup(env);
    instance.onCloseToast();
  });
});
