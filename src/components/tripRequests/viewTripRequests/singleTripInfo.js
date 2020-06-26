import React  from 'react';
import { useHistory } from 'react-router-dom';

export default (props)=>{
    const history = useHistory();
    
    // obtaining Single Trip Info
    const { name, email, manager, result } = props.information;
    
    const dataFound= { ...result }
    const tripData  = { ...dataFound.tripRequest }
    const { origin,destination, dateOfReturn, dateOfTravel,travelReason } = { ...tripData[0]};
    
    // obtaining Accommodation Information: 
      const { data } = { ...props.accommodation };
      
      const dataSet = { ...data };
      const getName = { ...dataSet.data }
      const { images, services } ={ ...dataSet.data };
      const image = { ...images }
      const {url} = { ...image[0]}
      const service = { ...services }
      const serviceGot = { ...service[0] }
    
return(
<div className='tripInformation'>
    <div className='header'>
    <div
        className='backToTrips'
        onClick={()=> history.push(`/viewtrips/${dataFound.status}`)}
    > <i className="material-icons">arrow_back</i> Back to trips
    </div>
    
    <button
        className='btn waves-effect waves-light'
        onClick={()=> window.location.assign(`/edit/${dataFound.id}`)}
        disabled={dataFound.status==='pending'? false : true}
    > EDIT TRIP REQUEST </button>
    </div>
    
    <h5 className='title'>Trip Number:{dataFound.id}</h5>

    <div className='content'>
    <div className='infoRow'><span>Name: </span>    <b>{ name }</b></div>
    <div className='infoRow'><span>Email: </span>    <b>{ email }</b></div>
    <div className='infoRow'><span>From: </span>    <b>{ origin }</b></div>
    <div className='infoRow'><span>To:</span>    <b>{ destination }</b></div>
    <div className='infoRow'><span>Date of Travel:</span>    <b>{ dateOfTravel }</b></div>
    
    {dateOfReturn && (<div className='infoRow'><span>Date of return: </span>    <b>{ dateOfReturn }</b></div>)}
    
    <div className='infoRow'><span>Manager: </span>    <b>{ manager }</b></div>
    <div className='infoRow'><span>Travel Reason: </span>    <b>{ travelReason }</b></div>
    <div className='accommodation'>
        <span className='infoRow'>Accomodation</span>
        <div className='accommodationRow'>
        
        <div className="accommodationImg">
           <img src={url} alt='hotel picture' />
        </div>
        
        <div className="accomodationDetails">
                <div className='title'><b>{ getName.name?getName.name:'Hotel Name' }</b></div>
                
                <div className='serviceDetails'>
                    <b>{serviceGot.name?serviceGot.name:'serviceName'}</b>
                    <span>Cost: {serviceGot.cost?serviceGot.cost:'$0.0'}</span>
                </div>
                
                <div className='description'>
                {serviceGot.description?serviceGot.description: 'Simple Description'}      
                </div>
        </div>
        </div>
    </div>
    
    </div>
</div>
)};
