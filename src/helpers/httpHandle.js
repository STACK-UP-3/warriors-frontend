export const ReqNoPayload =  ( method, endUrl )=>{
	try{
		return fetch(`${process.env.API_BASE_URL}${endUrl}`,{ method });

	}catch(e){ }
};

export const ReqPayload = (info, method, endUrl)=>{
	try{
		return fetch(`${process.env.API_BASE_URL}${endUrl}`,{
			   method: method, 
			   headers: {
			   Accepted:'appication/json',
			   'Content-Type': 'application/json'
			   },
			   body:JSON.stringify(info)
		}
		)}catch(e){ }
};
