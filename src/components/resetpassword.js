import React, { Component } from "react";
import { resetPassword } from "../redux/actions/resetPasswordAction";
import { connect } from "react-redux";
import queryString from "query-string";
import SyncLoader from "react-spinners/SyncLoader";
import { Link } from "react-router-dom";
import cx from 'classnames';


export class resetpassword extends Component {
    constructor(props) {
      super(props);
      this.state = {
        password: "",
        confirmPassword: "",
        isPasswordReset: false,
        isResetInProgress: false,
      };
    }
    componentWillReceiveProps({ isPasswordReset, isResetInProgress }) {
      this.setState({
        isPasswordReset,
        isResetInProgress,
      });
    }
    handlePasswordChange = (e) => {
      console.log(e.target.value);
      const { value: password } = e.target;
      this.setState({ password });
    };
    handleResetPasswordEvent = async () => {
      const { token } = queryString.parse(this.props.location.search);
      const { password } = this.state;
      await this.props.resetPassword(password, token);
    };
  
  
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
                  <Link
                    className={cx("btn","btn-cancel")}
                    to="/login"
                  >
                    Cancel
                  </Link>
                  <button
                    className="btn waves-effect waves-light btn-send"
                    onClick={this.handleResetPasswordEvent}
                  >
                    {this.state.isResetInProgress ? (
                      <SyncLoader
                        size={5}
                        margin={5}
                        color={"#fff"}
                        loading={this.state.isResetInProgress}
                      />
                    ) : (
                      "Reset password"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export const mapStateToProps = ({
    resetPassword: { isPasswordReset, isResetInProgress },
  }) => ({
    isPasswordReset: isPasswordReset,
    isResetInProgress:isPasswordReset
  });
  
  export default connect(mapStateToProps, { resetPassword })(resetpassword);
  