import React from "react";
import { shallow } from "enzyme";
import { resetpassword as PasswordReset, mapStateToProps } from "../../components/resetpassword";
let resetPasswordComp;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbm55a2Ftb3NvMjAyM0BnbWFpbC5jb20iLCJpYXQiOjE1OTE2NTcxNzEsImV4cCI6MTU5MTY2MDc3MX0.aUwB5Q6TF6KjM8y6viuhQlnAbW_z3oji2v9g689dp1c";

describe("***************** Testing t resetpasword  component ***************", () => {
  const props = {
    isPasswordReset: true,
    resetPassword: jest.fn(),
    location: { search: { token: token } },
  };
  beforeAll(() => {
    resetPasswordComp = shallow(<PasswordReset {...props} />);
  });

  it("Should render the reset password page correctly", () => {
    resetPasswordComp
      .instance()
      .componentWillReceiveProps({ isPasswordReset: true });
    resetPasswordComp
      .instance()
      .handlePasswordChange({ target: { value: "passwosjjsj" } });
    resetPasswordComp.instance().handleResetPasswordEvent();
    expect(resetPasswordComp).toMatchSnapshot();
  });
  it("Should send states to props in reset password", () => {
    expect(
      typeof mapStateToProps({ resetPassword: { isPasswordReset: true } })
    ).toBe("object");
  });
});
