import React from 'react';
import price1 from '../../Resource/Images/pricing1.jpg'
import price2 from '../../Resource/Images/pricing2.jpg'
import price3 from '../../Resource/Images/pricing3.jpg'
import price4 from '../../Resource/Images/pricing4.jpg'

const PricingCarousel = () => {
   const pricingArray = [
      {price: price1, active: 'active'}, 
      {price: price2, active: ''}, 
      {price: price3, active: ''}, 
      {price: price4, active: ''}
   ]

   return (
      <div 
         id="carouselControls" 
         className="carousel slide d-block d-md-none" 
         data-ride="carousel"
      >
         <div className="carousel-inner">
            {
               pricingArray.map(pricing => {
                  const {price, active} = pricing;
                  return <div className={`carousel-item ${active}`}>
                     <img className='img-fluid'src={price} alt=""/>
                  </div>
               })
            }
         </div>
         <div className='carouselController'>
            <a href="#carouselControls" data-slide="prev">
               <i className="fas fa-chevron-left"></i>
            </a>
            <a href="#carouselControls" data-slide="next">
               <i className="fas fa-chevron-right"></i>
            </a>
         </div>
      </div>
   );
};

export default PricingCarousel;