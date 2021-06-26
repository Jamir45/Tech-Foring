import React from 'react';

const Banner = () => {
   return (
      <div className="appBanner">
         <div className="container">
            <div className="row p-3 p-md-3 p-lg-0">
               <h1>TECHFORING VULNERABILITY SCANNER</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, consectetur? Amet repellat, vel eaque vero laborum, pariatur incidunt deserunt fuga nesciunt sit praesentium placeat ea quidem animi temporibus.</p>
               <form className="col-md-7 mx-auto">
                  <input 
                     className='form-control' 
                     placeholder='https://jamir-hossain.web.app/' 
                     type="text"
                  />
                  <input 
                     className='form-control' 
                     placeholder='Your email address' 
                     type="text"
                  />
                  <button type="submit">
                     FREE SCAN
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Banner;