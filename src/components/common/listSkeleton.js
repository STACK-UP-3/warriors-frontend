import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default () => {
  return (
      <section>
          <h1 id='skeletonListTitle'>
            <Skeleton duration={1} height={30}  />
          </h1>
          <div className='tripRequestsContent'>
          <div className='tripRequestsList'>
          
          <div className='collectionSkeleton'>
            <div id={1} >
               <Skeleton height={50} />
            </div>
            </div>
               
           <div className='collectionSkeleton'>
            <div id={1} >
               <Skeleton height={50} />
               </div>
            </div>
               
           <div className='collectionSkeleton'>
            <div id={1} >
               <Skeleton height={50} />
               </div>
            </div>
               
           <div className='collectionSkeleton'>
            <div id={1} >
               <Skeleton height={50} />
               </div>
            </div>
               
            <div className='collectionSkeleton'>
            <div id={1} >
               <Skeleton height={50} />
               </div>
            </div>
               
           <div className='collectionSkeleton'>
            <div id={1} >
               <Skeleton height={50} />
               </div>
            </div>
          </div
          >
          </div>
      </section>
  );
};
