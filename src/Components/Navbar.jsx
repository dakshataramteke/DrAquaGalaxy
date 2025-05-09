import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../assets/img/Dr. Aqua Galaxy Logos.png';
import './Home.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
    const offcanvasElement = document.getElementById('offcanvasExample');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
      offcanvas.hide();
    }
  };

  return (
    <>
      <header className="header" >
        <nav className="navbar navbar-expand-lg navbar-light fixed-top z-30 bg-light"  >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logoImg} alt="logo_img" height={"50px"} width={"100%"} />
            </a>

            <button
              className="order-last d-lg-none bg-none navbar_data bg-light"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span ><MenuIcon/></span>
            </button>
            {/* Mobile view offcanvas */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <img src={logoImg} alt="logo_img" height={"50px"} width={"40%"} />
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body ">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className={`nav-link ${activeLink === '#home' ? 'active' : ''}`} aria-current="page" href="#home" onClick={() => handleLinkClick('#home')}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${activeLink === '#products' ? 'active' : ''}`} href="#products" onClick={() => handleLinkClick('#products')}>
                      Products
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
                      href="#about"
                      tabIndex="-1"
                      aria-disabled="true"
                      onClick={() => handleLinkClick('#about')}
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Horizontal Navbar  */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link ${activeLink === '#home' ? 'active' : ''}`} aria-current="page" href="#home" onClick={() => handleLinkClick('#home')}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeLink === '#products' ? 'active' : ''}`} href="#products" onClick={() => handleLinkClick('#products')}>
                    Products
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
                    href="#about"
                    tabIndex="-1"
                    aria-disabled="true"
                    onClick={() => handleLinkClick('#about')}
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;