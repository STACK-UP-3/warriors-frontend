import moxios from "moxios";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { TestScheduler } from "jest";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbm55a2Ftb3NvMjAyM0BnbWFpbC5jb20iLCJpYXQiOjE1OTE2NTcxNzEsImV4cCI6MTU5MTY2MDc3MX0.aUwB5Q6TF6KjM8y6viuhQlnAbW_z3oji2v9g689dp1c";
import {sendResetEmail,resetPassword} from '../../../redux/actions/resetPasswordAction';

const middleWare = [thunk];
const mockStore = configureStore(middleWare);

const store = mockStore({});
describe("Send reset ", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
    store.clearActions();
  });

  test("Should send reset email action", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status:200,
        response:{message:"Sent successfully"}});
    });
    return store.dispatch(sendResetEmail("benshidanny11@gmail.com")).then(()=>{
        expect(store.getActions().length).toEqual(1);
    })
  });


  test("Should reset password action", async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
       request.respondWith({ status:200,
        response:{message:"Password changed successfully!"}});
    });
    return store.dispatch(resetPassword("dann123",token)).then(()=>{
        expect(store.getActions().length).toEqual(1);
    })
  });


});