import React, { useEffect, useState, useRef } from 'react';
import M from 'materialize-css';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TripRequest from './tripRequest';
import Filters from './filters';
import Navbar from '../../navBar';
import SideMenu from '../../common/sideMenu';
import MobileSidebar from '../../common/mobileSidebar';
import Footer from '../../footer';
import Pagination from '../../pagination';
import ErrorMessage from '../../requestFail';
import NocontentFound from '../../noContentFound';
import  { onViewTrips } from '../../../redux/actions/tripRequestActions';
import SkeletonList from '../../common/listSkeleton';

toast.configure();

export default ()=>{
    const dispatch = useDispatch();
    const tripRequestsStore = useSelector( store=> store.tripRequests );
    const location = useLocation();
     
 const storeData = {...tripRequestsStore.tripInfo.data};
 const data = { ...storeData.data }
 const results = data.result;
 
 const lastPageString = localStorage.getItem('tripRequestPage')
 const lastPage = JSON.parse(lastPageString)
 
 const [paginationState, setPaginationState] = useState({
    page: lastPage || (data.previousPage?(data.previousPage.page +1): 1),
    limit: 6,
    status:location.pathname.includes('accepted')?'accepted':
           location.pathname.includes('pending')?'pending':
           location.pathname.includes('rejected')?'rejected':'NO',
    pages:[],
    error: null,
 });
 
 const prevPage = useRef();
 
useEffect(()=>{
    M.AutoInit(); 
    prevPage.current = paginationState.page; 
    
    dispatch( onViewTrips(paginationState)); 
    
 },[paginationState.page,paginationState.status]);
 
 const paginationPages = [];
 const pageDetails =()=>{
   for(let i=1; i <= data.numberOfPages; i++){
          paginationPages.push(i);            
       } 
      paginationState.pages=[ ...paginationPages ]
   }
 
pageDetails(); 
  
 if(tripRequestsStore.tripInfo.name === 'Error'){ 
   if(tripRequestsStore.tripInfo.message.includes('Network Error')){
    toast.error( <ErrorMessage />,{
      position: toast.POSITION.TOP_CENTER,
      toastId: 'Backend-ConnectionError',
     });
   }else{
   if( tripRequestsStore.tripInfo.response.data.message === 'Unauthorised Access: You have to login to Proceed'||
        tripRequestsStore.tripInfo.response.data.message === 'No token provided or Token expired'){
      localStorage.removeItem("token");
      window.location.assign('/login');
    };
   }
  }
 
 
 const statusChange =(status)=> { setPaginationState({ ...paginationState, page:1, status:status })};
 
 const previousPage = () =>{ 
    prevPage.current = paginationState.page;  
   if(prevPage.current > 1){
        return setPaginationState({ ...paginationState, page: prevPage.current - 1 });
   }     
}
 
const nextPage = () => {
       prevPage.current = paginationState.page;
    if(data.numberOfPages > prevPage.current){
      return setPaginationState({ ...paginationState, page:prevPage.current + 1 });
    }
}


 return(
     
     <div className='tripRequestLayout'>
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
            <div className='mainContent'>
            <div className='row'>
                <div className='col s12 m2'>
                    <Filters 
                      statusChange={ statusChange }
                      status={paginationState.status} 
                    />
                </div>
                
                <div className='col s12 m10 content'>
                { tripRequestsStore.loading ? <SkeletonList />: (
                  <div className='contentAfterSkeleton'>
                    <h1 id='listTitle'>
                      {paginationState.status[0].toUpperCase().concat(paginationState.status.slice(1))} Trips 
                    </h1>
                  <div>
                    
                    {tripRequestsStore.tripInfo.name === 'Error' ?(<NocontentFound />):(
                      <div className='tripRequestsContent'>
                        <div className='tripRequestsList'>
                          
                          { results ? results.map((tripRequest)=> (
                             <TripRequest 
                              key={tripRequest.id} 
                              information={ tripRequest }
                              currentPage={paginationState.page} 
                              />)
                            ): null }
                        
                        </div>
                          
                          <Pagination 
                            previousPage={previousPage} 
                            nextPage={nextPage} 
                            prevPage={prevPage.current} 
                            page={ paginationState.page } 
                            numberOfPages={data.numberOfPages} 
                            pages={paginationState.pages}
                        />
                  </div>
                  )} 
                  </div>
                  </div>
                  )}
                </div>
                </div>
            </div>
        </main>
        <Footer />
      </div>
 )   
};
