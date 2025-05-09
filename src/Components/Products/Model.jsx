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
          <img src={star} alt="star" />
       
          <img src={mercury} alt="mercury" />
      
          <img src={jupiter} alt="jupiter" />
      
          <img src={bio} alt="bio" />
       
          <img src={plus} alt="plus" />
       
          <img src={pluto} alt="pluto" />
       
          <img src={diamond} alt="diamond" />
        </div>
      </div>

    
    </div>
    </div>
     
    </>
  )
}

export default Model
