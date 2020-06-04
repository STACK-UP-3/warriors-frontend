import http from '../helpers/httpHandle';

export const loginService = async data => {
	const response = await http(data, 'POST', '/users/signin');

	return response.json();
};
