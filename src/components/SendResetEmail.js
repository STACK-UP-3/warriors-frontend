import React from "react";
import { sendResetEmail} from "../redux/actions/resetPasswordAction";
import { connect } from "react-redux";
import cx from 'classnames';
import { Link } from "react-router-dom";


export class SendResetEmail extends React.Component {

 state={
   email:'',
   isResetPasswordSent:false
 }
 componentWillReceiveProps({isResetPasswordSent}){
    this.setState({
      isResetPasswordSent
    })
  }

  handleEmailChange=(e)=>{
   this.setState(
     {
       email:e.target.value
     }
   )
  }
  handleSendEmailResetLink=()=>{
    const {email}=this.state;
    this.props.sendResetEmail(email);
  }
  render() {

    return (
      <div className="main-reset">
        <div className="resetpasswordcontainer">
          <div className="inner-reset-container">
            <div className="txt-container">
              <p className="p-reset-message">Forgot password</p>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="txt-input"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
              <div className="div-contaier">
              <Link
                  className={cx("btn","btn-cancel")}
                  to="/login"
                >
                  Cancel
                </Link>
                <button className="btn  waves-effect waves-light btn-send" onClick={this.handleSendEmailResetLink} >Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export const mapStateToProps = ({ resetPassword: {isResetLinkSent} }) => ({
  isResetPasswordSent:isResetLinkSent
});

export default connect(mapStateToProps, { sendResetEmail})(SendResetEmail);