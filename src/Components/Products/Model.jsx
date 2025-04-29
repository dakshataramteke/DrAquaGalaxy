import React from 'react';
import star from '../../assets/img/Model/startl.jpg';
import mercury from '../../assets/img/Model/mercuryl.jpg';
import jupiter from '../../assets/img/Model/jupiterl.jpg';
import bio from '../../assets/img/Model/Biol.jpg';
import plus from '../../assets/img/Model/plusl.jpg';
import pluto from '../../assets/img/Model/plutol.jpg';
import diamond from '../../assets/img/Model/Diamondl.jpg';


const Model = () => {
  return (
    <>
    <div className="scrollingPage">
    <div className="container my-5">
      <div className="row">
        <div className="modelPage">
          <img src={star} alt="" />
       
          <img src={mercury} alt="" />
      
          <img src={jupiter} alt="" />
      
          <img src={bio} alt="" />
       
          <img src={plus} alt="" />
       
          <img src={pluto} alt="" />
       
          <img src={diamond} alt="" />
        </div>
      </div>

      {/* 2nd Row  */}
      {/* <div className="row">
      <div className="cardPageRo">
          <img src={carbonFilter} alt="" />
       
          <img src={copperFilter} alt="" />
      
          <img src={RoMembrane} alt="" />
      
          <img src={Sedium} alt="" />
       
          <img src={UltraViolet} alt="" />

        </div>
      </div> */}
    </div>
    </div>
     
    </>
  )
}

export default Model
