import React, { useEffect } from 'react';
import M from 'materialize-css';
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../navBar';
import SideMenu from '../../common/sideMenu';
import MobileSidebar from '../../common/mobileSidebar';
import TripRequestInfo from './singleTripInfo';
import ErrorMessage from '../../requestFail';
import Footer from '../../footer';
import NotFound from '../../noFound';
import  { onViewTrip } from '../../../redux/actions/tripRequestActions';
import  { getAccomodation } from '../../../redux/actions/accommodationActions';

toast.configure();

export default (props)=>{
    
const dispatch = useDispatch();
const tripStore = useSelector( store=> store.tripRequest );
const accommodationStore = useSelector( store=> store.accommodation );

useEffect(()=>{
    M.AutoInit();
    dispatch( onViewTrip(props.match.params.id)); 
    
    const accomm_id = JSON.parse(localStorage.getItem('accommID'));  
    dispatch(getAccomodation(accomm_id));
 },[]);

 if(tripStore.singleTripInfo.name === 'Error'){
   if(tripStore.singleTripInfo.message.includes('Network Error')){
    toast.error( <ErrorMessage />,{
    position: toast.POSITION.TOP_CENTER,
    toastId: 'Backend-ConnectionError',
   });
  }else{
    
    if( tripStore.singleTripInfo.response.data.message === 'Unauthorised Access: You have to login to Proceed'
       || tripStore.singleTripInfo.response.data.message ==='No token provided or Token expired'){
            localStorage.removeItem("token");
            window.location.assign('/login');
     };
    
    if( tripStore.singleTripInfo.response.data.message.includes('not found') || tripStore.singleTripInfo.response.data.message.includes('trip_id must be a number')){
      return (<NotFound title={ props.match.params.id } />);
    };
    }
  }
 
 
 const storeData = {...tripStore.singleTripInfo.data};
 const data = { ...storeData.data }

 return(
     
     <div className='singleTripLayout'>
        <Navbar />
        <main>
        <div className='sideMenu'>
              <div className='fixed-sidebar container center hide-on-med-and-down'>
                <SideMenu />
              </div>
              <div className='show-on-med-and-down container center'>
                <MobileSidebar />
              </div>
            </div>
            <div className='mainTripContent'>
              <TripRequestInfo information={ data } accommodation={accommodationStore.accommodation} />
            </div>
        </main>
        <Footer />
      </div>
 )   
};

