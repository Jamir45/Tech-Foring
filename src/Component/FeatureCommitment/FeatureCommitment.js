import React from 'react';
import Heading from '../Common/Heading';
import Commitment from './Commitment';
import Features from './Features';
import SuccessData from './SuccessData'

const FeatureCommitment = () => {
   return (
      <div className='featureCommitment' id="service">
         <Heading value='WHAT THIRDEYE LOOKS FOR ON YOUR SITE' />
         <Commitment />
         <div className="successStory">
            <div className="container row mx-auto p-0">
               {
                  SuccessData.map(success => {
                     const {icon, title, details} = success
                     return <div className='col-6 col-md-3'>
                        <div className="iconDiv">
                           <img className='img-fluid' src={icon} alt=""/>
                        </div>
                        <div className="details">
                           <h1>{title}</h1>
                           <p>{details}</p>
                        </div>
                     </div>
                  })
               }
            </div>
         </div>
         <Features />
      </div>
   );
};

export default FeatureCommitment;