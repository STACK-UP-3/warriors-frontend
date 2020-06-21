export const ReqNoPayload =  ( method, endUrl )=>{
	try{
		return fetch(`${process.env.API_BASE_URL}${endUrl}`,{
				method,
				headers: {
					Accepted:'appication/json',
					'Content-Type': 'application/json',
					authorization : JSON.parse(localStorage.getItem("token"))
					},
			});
	}catch(e){ }
};

export const ReqPayload = (info, method, endUrl)=>{
	try{
		return fetch(`${process.env.API_BASE_URL}${endUrl}`,{
					method, 
					headers: {
						Accepted:'appication/json',
						'Content-Type': 'application/json'
					},
					body:JSON.stringify(info)
		})
	}catch(e){ }
};
