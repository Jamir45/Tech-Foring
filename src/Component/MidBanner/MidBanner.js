import React from 'react';
import desktopMockup from '../../Resource/Images/desktop-mockup.png'
import Heading from '../Common/Heading';

const MidBanner = () => {
   return (
      <div className="midBanner">
         <div className="container">
            <div className="row">
               <div className='col-md-6 image'>
                  <img className='img-fluid' src={desktopMockup} alt=""/>
               </div>
               <div className="col-md-6 text-center details">
                  <h2>READY TO GET STARTED WITH YOUR 30-DAY TRIAL</h2>
                  <button>
                     Try for free
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MidBanner;