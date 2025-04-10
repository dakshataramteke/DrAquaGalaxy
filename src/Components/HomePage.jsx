import React from 'react';
import DrAquaHome from '../assets/video/DrAquavideo.mp4';

const HomePage = () => {
  return (
    <>
      <section>
      <video class="embed-responsive-item" controls autoPlay loop  style={{width:'100%' , height:'100vh'}}>
            <source src={DrAquaHome} type="video/mp4"/>
          
        </video>
      </section>
    </>
  )
}

export default HomePage
