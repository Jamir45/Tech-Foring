import React from 'react';
import Heading from '../Common/Heading';
import reportPng from '../../Resource/Images/4.png'

const FullScan = () => {
   return (
      <div className="container fullScan p-3 p-lg-0">
         <Heading value='WANT A FULL SCAN' />
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi rerum accusantium magnam ullam iusto tempora quod enim atque quam similique, laborum quia voluptatibus autem qui. Culpa, id. Dolore, voluptates.Nam velit aperiam repellat ea quo quod itaque, nesciunt similique aspernatur eaque facere earum quibusdam autem officiis inventore, molestias quisquam delectus, corrupti vel non quam eos natus doloribus? Dolorem, reiciendis. </p>
         <button type="submit">
            FULL SCAN
         </button>
         <div className="row">
            <div className="col-md-5 mt-lg-5 p-3">
               <h4 className="mt-lg-3">SAMPLE REPORT</h4>
               <h6>Here is a Website Vulnerability Scanner sample report</h6>
               <ul>
                  <li>
                     The report start with quick summery of the findings and risk rating
                  </li>
                  <li>
                     Each finding has a detailed explanation in the terms of risk and recommendations
                  </li>
                  <li>
                     The vulnerabilities are ordered by the risk level
                  </li>
               </ul>
            </div>
            <div className="col-md-7 p-3">
               <img className='img-fluid' src={reportPng} alt=""/>
            </div>
         </div>
      </div>
   );
};

export default FullScan;