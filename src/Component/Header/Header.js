import React,{ useEffect, useState } from 'react';


const Header = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed , setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);
  
  return (
      <div className="applicationHeader" id="home">
        <nav class={isSticky ? "navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-light" : "navbar navbar-expand-lg navbar-light fixed-top bg-white"}>
          <div class="container">
            <a href="#home" className="appLogo">
              <span>Tech</span><br/>
              <h5>F<span>o</span>ring</h5>
            </a>

            <div class="ms-auto d-flex">
              <button class="btn btn-outline-secondary mx-3 d-md-block d-lg-none">
                Sign In/Sign Up
              </button>
              <button
                class="navbar-toggler ms-auto" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>

            <div class="collapse navbar-collapse px-lg-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="#">More</a>
                </li>
                <li className="nav-item">
                  <a href="#service">Services</a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a href="#resource">Resources</a>
                </li>
              </ul>
            </div>
            <button class="btn btn-outline-secondary d-none d-lg-block">
                Sign In/Sign Up
            </button>
          </div>
        </nav>
      </div>
   );
};

export default Header;