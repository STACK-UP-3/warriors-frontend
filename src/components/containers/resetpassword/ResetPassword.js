import React, { Component } from "react";

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
    };
  }
  handlePasswordChange = (e) => {
    console.log(e.target.value);
    const { value: password } = e.target;
    this.setState({ password });
  }

  render() {
    return (
      <div className="main-reset">
        <div className="resetpasswordcontainer">
          <div className="inner-reset-container">
            <div className="txt-container">
              <p className="p-reset-message">Reset password</p>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="txt-input"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <input
                id="confirmpassword"
                type="password"
                placeholder="Confirm password"
                className="txt-input"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <div className="div-contaier">
                <button className="btn btn-cancel">Cancel</button>
                <button className="btn btn-send">Reset password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPassword;
