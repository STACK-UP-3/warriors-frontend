/* istanbul ignore file */
import http from '../helpers/fetchHandle';
export const getTripsService = async ( {page, limit, status}) => {
	try{
	const response = await http.get(`/trips?page=${page}&limit=${limit}&status=${status}`);
	return response;
	
	} catch(error){
		return error;
	}
};

export const getSingleTrip = async (param) => {
	try{
	const response = await http.get(`/trips/${param}`);
	return response;
	} catch(error){
		return error;
	}
};

export const getAccommodationDetails = async (param) => {
	try{
	const response = await http.get(`/accommodations/${param}`);
	return response;
	}catch(error){
		return error;
	}
};