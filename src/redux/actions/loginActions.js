import { LOGIN_ACTION} from './actionTypes';
import { loginService } from '../../services/authService';

export const onUserLogin = (userData)=>({      
        type: LOGIN_ACTION,
        payload: loginService(userData),
});
