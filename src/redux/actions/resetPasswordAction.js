import {RESET_ACTION,SEND_RESET_EMAIL_ACTION,SEND_RESET_EMAIL_IN_PROGRESS,RESET_IN_PROGRESS} from './actionTypes';
import axios from 'axios';
const sendResetEmailAPILink='https://warriorz-staging.herokuapp.com/api/v1/password/forgot';
const resetPasswordAPILink="https://warriorz-staging.herokuapp.com/api/v1/password/reset";
let resetResponse,sendResetResponse;


export const resetPassword=(password,token)=> async (dispatch)=>{
  
   resetResponse=await  axios.patch(`${resetPasswordAPILink}/${token}`,{password});
  dispatch({'type':RESET_ACTION,payload:resetResponse.data.status===200?true:false})


}


export const sendResetEmail=(emailInput)=> async (dispatch)=>{
  sendResetResponse=await  axios.post(sendResetEmailAPILink,{email:emailInput});
 dispatch({'type':SEND_RESET_EMAIL_ACTION,payload:sendResetResponse.data.status===200?true:false})

}