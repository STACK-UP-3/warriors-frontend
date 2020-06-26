import React from 'react';
import { useHistory } from 'react-router-dom';

export default ({information, currentPage})=>{
   const history = useHistory();
  const { tripRequest } = information;
  const { origin, destination, type,accommodation_id,travelReason} = { ...tripRequest[0] };
  
  
  const onClick =()=>{
      const accommodationID = JSON.stringify(accommodation_id);
         localStorage.setItem('accommID', accommodationID);
         localStorage.setItem('tripRequestPage', currentPage)
         history.push(`/viewtrip/${information.id}`);
   }
  
 return(
    <div className='collection'>
     <div 
         className='collection-item waves-effect waves-tea'
         id={information.id}
         onClick={ onClick }
     >
         <div className='itemDetail' id='origin'>
            <b>   Origin:</b> <span> { origin } </span>
         </div>
         <div className='itemDetail' id='destination'>
            <b> Destination:</b> <span> { destination } </span>
         </div>
         <div className='itemDetail' id='manager'>
            <b> Reason:</b> <span> { travelReason } </span>
         </div>
         <div className='itemDetail' id='tripType'>
            <b> Type:</b> <span> { type } </span>
         </div>
      </div>
      </div>
 )   
};
