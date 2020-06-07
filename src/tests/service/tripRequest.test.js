import  { getTripsService } from '../../services/tripRequest';

describe('-----//----> TESTING THE TRIP REQUESTS SERVICE <----//-----', ()=>{
    it('Should trip request service',() => {
        const data = {
            page:1, 
            limit:2, 
            status:'pending'
            };
        expect(getTripsService(data));
      });
})