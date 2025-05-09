

import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import DrAquaHome from '../assets/video/DrAquavideo.mp4';
import Magnesium from '../assets/img/Model/Amagnesium.jpg';
import Alkaline from '../assets/img/Model/alkaline.jpg';
import ISO from '../assets/img/Model/ISOCertifiedbg.png';
import './Home.css';

const HomePage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the video is playing

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Set the state to true when the video starts playing
    }
  };

  return (
    <>
      <section id='home' className='home'>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 col-md-9 position-relative">
              <video ref={videoRef} className="embed-responsive-item" loop>
                <source src={DrAquaHome} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && ( // Render the button only if the video is not playing
                <button onClick={handlePlay} className="play-button">
                  <FontAwesomeIcon icon={faPlay} size="2x" />
                </button>
              )}
            </div>
            <div className="col-12 col-md-2 Ro_Uv d-flex flex-column justify-content-center align-items-center gap-3">
              <img src={Magnesium} alt="Magnesium" />
              <img src={Alkaline} alt="Alkaline" />
              <img src={ISO} alt="ISO" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;