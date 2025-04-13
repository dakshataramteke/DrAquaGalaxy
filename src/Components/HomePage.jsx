import React from 'react';
import DrAquaHome from '../assets/video/DrAquavideo.mp4';
import Magnesium from '../assets/img/Model/Amagnesium.jpg';
import TDS from '../assets/img/Model/TDSGalaxy.jpg';
import TestedOk from '../assets/img/Model/TestedOk.jpg';
import './Home.css';

const HomePage = () => {
  return (
    <>
      <section id='home'>
    <div className="container-fluid videoPage">
      <div className="row">
        <div className="col-12 col-md-9">
        <video className="embed-responsive-item" autoPlay loop muted >
    <source src={DrAquaHome} type="video/mp4" />
</video>
        </div>
        <div className="col-12 col-md-2 Ro_Uv d-flex flex-column justify-content-center align-items-center gap-3">
       <img src={Magnesium} alt=""  />
       <img src={TDS} alt=""   />
       <img src={TestedOk} alt="" />
        </div>
      </div>
    </div>
    
      </section>
    </>
  )
}

export default HomePage
