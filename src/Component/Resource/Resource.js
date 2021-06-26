import React from 'react';
import Heading from '../Common/Heading';
import ResourceData from './ResourceData'

const Resource = () => {
   return (
      <div className="container" id="resource">
         <div className="row ResourceSection">
            <Heading value='RESOURCE'/>
            {
               ResourceData.map(resource => {
                  const {title, image, details} = resource
                  return <div className="col-md-4">
                     <h3>{title}</h3>
                     <div className="resource">
                        <img src={image} alt=""/>
                        <p>{details}</p>
                        <button className='btn'>
                           Learn more
                        </button>
                     </div>
                  </div>
               })
            }
         </div>
      </div>
   );
};

export default Resource;