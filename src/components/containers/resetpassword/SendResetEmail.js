import React from "react";
import { sendResetEmail} from "../../../redux/actions/resetPasswordAction";
import { connect } from "react-redux";


class SendResetEmail extends React.Component {

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
  render() {
    const {email}=this.state;
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
                <button className="btn btn-cancel">Cancel</button>
                <button className="btn btn-send" onClick={()=>{
                 this.props.sendResetEmail(email)
                }} >Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
const mapStateToProps = ({ resetPassword: {isResetLinkSent} }) => ({
  isResetPasswordSent:isResetLinkSent
});

export default connect(mapStateToProps, { sendResetEmail})(SendResetEmail);
