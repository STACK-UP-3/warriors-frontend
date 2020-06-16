import { TokenAuth } from '../../../redux/actions/loginActions'
import { LOGIN_ACTION} from '../../../redux/actions/actionTypes';
import { verifyToken } from '../../../services/authService';

test('should authenticate a token',()=>{
    const token = 'kabundege';
    const action = TokenAuth(token);
    expect(action).toEqual({
        type: LOGIN_ACTION,
        payload: verifyToken('GET',token)
    })
})
