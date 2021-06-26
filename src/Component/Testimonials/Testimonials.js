import React from 'react';
import TestimonialsData from './TestimonilasData'
import leftQuotes from '../../Resource/icons/left-quotes-sign.png'
import TestimonialsCousel from './TestimonialsCousel';
import leftRightArrow from '../../Resource/icons/right-arrow copy.png'
import Heading from '../Common/Heading';

const Testimonials = () => {
   return (
      <div className='container'>
         <div className="row testimonialSection">
            <Heading value='WHAT OUR CUSTOMER SAY' />
            {
               TestimonialsData.map(testimonial => {
                  const {clientImg, clientName, state, comment} = testimonial
                  return <div className="col-md-6 d-none d-md-block">
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
         <TestimonialsCousel />
      </div>
   );
};

export default Testimonials;