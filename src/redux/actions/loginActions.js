import { LOGIN_ACTION} from './actionTypes';
import { verifyToken,loginService } from '../../services/authService';

export const TokenAuth = (token)=>({      
        type: LOGIN_ACTION,
        payload: verifyToken('GET',token),
});

export const onUserLogin = (userData)=>({      
        type: LOGIN_ACTION,
        payload: loginService(userData),
});
