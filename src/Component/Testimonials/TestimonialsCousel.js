import React from 'react';
import leftQuotes from '../../Resource/icons/left-quotes-sign.png'
import TestimonialsData from './TestimonilasData'

const TestimonialsCousel = () => {
   return (
      <>
      <div 
         id="carouselControls" 
         className="carousel slide d-block d-md-none" 
         data-ride="carousel"
      >
         <div className="carousel-inner">
            {
               TestimonialsData.map(testimonial => {
                  const {clientImg, active, clientName, state, comment} = testimonial
                  return <div className={`carousel-item ${active}`}>
                  <div className="testimonial">
                     <div className='comment'>
                        <img src={leftQuotes} alt=""/>
                        <p>{comment}</p>
                     </div>
                     <div className="client">
                        <img src={clientImg} alt=""/>
                        <h6>{clientName}</h6>
                        <p>{state}</p>
                     </div>
                  </div>
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
      <div className="carouselFooter d-block d-md-none"></div>
      </>
   );
};

export default TestimonialsCousel;