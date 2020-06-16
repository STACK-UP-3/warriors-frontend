import { ReqNoPayload,ReqPayload } from '../helpers/httpHandle';

export const verifyToken = async (method , token) => {
	const response = await ReqNoPayload(method, `/users/tokenAuth/${token}`);
	
	return response.json();
};

export const loginService = async data => {
	const response = await ReqPayload(data, 'POST', '/users/signin');

	return response.json();
};

export const getUserProfile = async () => {
	const response = await ReqNoPayload( 'GET', '/profile');
	
	return response.json();
}
