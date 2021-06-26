import React from 'react';
import FeaturesData from './FeaturesData'
import desktop from '../../Resource/Images/mockup-desktop.png'
import desktopOnMobile from '../../Resource/Images/mockup-desktop-mobile.png'
import Heading from '../Common/Heading';

const Features = () => {
   return (
      <div className="container" id="features">
         <div className="row featureSection">
            <div className="d-none d-md-block col-md-6">
               <img className='img-fluid' src={desktop} alt=""/>
            </div>
            <div className="col-md-6 row mx-auto features">
               <Heading value='Features of Thirdeye' />
               {
                  FeaturesData.map(feature => {
                     const {icon, details} = feature
                     return <div className="col-md-6">
                        <div className='details'>
                           <img src={icon} alt=""/>
                           <p> {details} </p>
                        </div>
                     </div>
                  })
               }
            </div>
            <div className="d-block d-md-none p-3 my-5">
               <img className='img-fluid' src={desktopOnMobile} alt=""/>
            </div>
         </div>
      </div>
   );
};

export default Features;