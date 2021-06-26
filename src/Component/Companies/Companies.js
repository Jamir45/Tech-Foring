import React from 'react';
import logo1 from '../../Resource/Images/samsung.png'
import logo2 from '../../Resource/Images/hiclipartn.com.png'
import logo3 from '../../Resource/Images/tesco.png'
import logo4 from '../../Resource/Images/toshiba.png'
import logo5 from '../../Resource/Images/walmart.png'
import logo6 from '../../Resource/Images/xerox.png'
import Heading from '../Common/Heading';

const Companies = () => {
   const companiesLogo = [logo1, logo2, logo3, logo4, logo5, logo6]

   return (
      <>
      <Heading value='TRUSTED BY IT & TELECOM COMPANIES LIKE' />
      <div className="companies">
         <div className="container">
            <div className="row">
               {
                  companiesLogo.map(company => {
                     return <div className="col-md-2 col-6">
                        <img className='img-fluid' src={company} alt=""/>
                     </div>
                  })
               }
            </div>
         </div>
      </div>
      </>
   );
};

export default Companies;