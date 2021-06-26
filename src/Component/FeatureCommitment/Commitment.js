import React from 'react';
import CommitmentData from './CommitmentData'

const Commitment = () => {
   
   return (
      <div className="container">
         <div className="row commitment">
            {
               CommitmentData.map(commitment => {
                  const {icon, title, details} = commitment
                  return <div className="col-md-6">
                     <div className='iconDiv'>
                        <img className='img-fluid' src={icon} alt=""/>
                     </div>
                     <div className="details">
                        <h5> {title} </h5>
                        <p> {details} </p>
                     </div>
                  </div>
               })
            }
         </div>
      </div>
   );
};

export default Commitment;