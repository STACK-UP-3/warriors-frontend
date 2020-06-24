import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

// import JestFetchMock from 'jest-fetch-mock'; // ~https://www.reactnativeschool.com/mocking-fetch-api-calls-when-using-jest

Enzyme.configure({ adapter: new Adapter() });

// global.fetch = JestFetchMock; // ~https://www.reactnativeschool.com/mocking-fetch-api-calls-when-using-jest
