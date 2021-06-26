import React from 'react';
import Heading from '../Common/Heading';
import pricing from '../../Resource/Images/pricing.png'
import checkMark from '../../Resource/icons/tick.png'
import fullPrice from '../../Resource/Images/fullpricing.jpg'
import PricingCarousel from './PricingCarousel';

const Pricing = () => {
   return (
      <div className="container pricingSection" id="pricing">
         <Heading value='PRICING' />
         <div className="desktopPricing d-none d-md-block">
            <img className='img-fluid' src={fullPrice} alt=""/>
         </div>
         <div className="row d-flex d-block d-md-none mobilePricing">
            <img className='img-fluid col-6 priceDetails' src={pricing} alt=""/>
            <div className="col-6 ml-n3">
               <PricingCarousel />
            </div>
         </div>
      </div>
   );
};

export default Pricing;