import React from 'react';
import FooterAccordion from './FooterAccordion';

const Footer = () => {
   const titles = ["COMPANY", "POPULAR LINKS", "RESOURCES", "LEGAL"]

   return (
      <div className="footerSection">
         <div className="container">
            <div className="row">
               {
                  titles.map(title => {
                     return <div className="col-md-3 d-none d-md-block">
                        <h6>{title}</h6>
                        <ul>
                           <li>Lorem ipsum dolor</li>
                           <li>Lorem ipsum dolor</li>
                           <li>Lorem ipsum dolor</li>
                           <li>Lorem ipsum dolor</li>
                           <li>Lorem ipsum dolor</li>
                        </ul>
                     </div>
                  })
               }
            </div>
            <FooterAccordion />
         </div>
      </div>
   );
};

export default Footer;