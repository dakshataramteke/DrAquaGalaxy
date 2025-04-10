import React from "react";
import { BsListNested } from "react-icons/bs";
import logoImg from '../assets/img/Dr. Aqua Galaxy Logos.png'
import './Home.css';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logoImg} alt="" height={"45px"} width={"100%"} />
            </a>

            <button
              className="order-last d-lg-none bg-none navbar_data"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span className="fs-7"><BsListNested/></span>
            </button>
            {/* Mobile view offcanvas */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
              <img src={logoImg} alt="" height={"40px"} width={"40%"} />
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
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Products
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">
                    Products
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
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
