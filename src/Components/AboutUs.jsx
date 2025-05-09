import Tested from '../assets/img/Model/TestedOkbg.png';
import './Home.css';

const AboutUs = () => {
  return (
    <>
      <section id='about' style={{backgroundColor: '#DAE0E4'}}>
        <div className="container">
            <div className="row py-5 about_us">
                <h1 className='py-3'>About Us</h1>
                <div className="col-12 col-md-10">
                    <p ><b><i>Dr Aqua Galaxy,</i></b>  where our commitment to health and sustainability drives 
                    everything we do.</p>
                    <p>Our diverse range of products, including our Alkaline and Copper Water Purifiers, is designed to various needs and preferences. With storage capacities ranging from 10Ltr to 24Ltr, We ensure that our solutions fit seamlessly into your lifestyle, providing you with the purest water at your convenience.</p>
                <p>ISO Certification signifies that a business meets rigorous quality management standards, enhancing its credibility and operational efficiency.</p>
                </div>
                {/* <div className="col-md-1"></div> */}
                <div className="col-12 col-md-2 d-flex justify-content-center tested_ok p-0">
                    <img src={Tested} alt="tested" style={{width:'100%', padding:'0 1rem'}} className='animate__animated animate__flash'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
