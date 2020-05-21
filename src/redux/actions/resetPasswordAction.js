import {RESET_ACTION,SEND_RESET_EMAIL_ACTION} from './actionTypes';
import axios from 'axios';
const sendResetEmailUrl='https://warriorz-staging.herokuapp.com/api/v1/password/forgot';


export const resetPassword=(password)=> async (dispatch)=>{
  dispatch({'type':RESET_ACTION,payload:{},password:password})
}


export const sendResetEmail=(emailInput)=> async (dispatch)=>{

  axios({
    method: "POST",
    url: sendResetEmailUrl,
     data:
      {
        email: emailInput,
      }

  })
    .then(res => {
      console.log("res", res.data);
        dispatch({'type':SEND_RESET_EMAIL_ACTION,payload:res.data.status===200?true:false})
  
    })
    .catch(err => {
      console.log("error in request", err);
    });


}
