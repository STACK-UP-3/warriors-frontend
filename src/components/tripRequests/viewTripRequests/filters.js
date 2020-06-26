import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import acceptedImg from '../../../assets/accepted.svg';
import pendingImg from '../../../assets/pending.svg';
import rejectedImg from '../../../assets/rejected.svg';
 
export default ({statusChange})=>{
   const location =useLocation();
   const history = useHistory();
   
   const onClick = (e)=>{
      const status = e.target.id; 
      
      if(status !=='activeFilter'){
         statusChange(status);
         history.push(`/viewtrips/${status}`);
      }
  }
      
   
 return(
     <div className='filtersList'>
            <div 
               id={location.pathname.includes('accepted') ?'activeFilter': 'accepted'}
               className='filterListItem'
               onClick={ onClick } 
            >
              <img src={acceptedImg} alt='accepted' id='accepted'/>
              </div>
         
         <div
            id={location.pathname.includes('pending') ?'activeFilter': 'pending'} 
            className='filterListItem'
            onClick={ onClick }
         >
           <img src={pendingImg} alt='pending' id='pending'/>
         </div>
         
          <div 
            id={location.pathname.includes('rejected') ?'activeFilter': 'rejected'} 
            className='filterListItem'
            onClick={ onClick }
          >
           <img src={rejectedImg} alt='rejected'  id='rejected'/>
           </div>
     </div>
 )   
};
