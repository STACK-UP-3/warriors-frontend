import { Get_Profile,Updated_profile } from './actionTypes';
import { getUserProfile } from '../../services/authService';

export const GetProfile = () => ({
    type:Get_Profile,
    payload: getUserProfile()
})
