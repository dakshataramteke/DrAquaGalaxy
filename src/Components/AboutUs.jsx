import ISO from '../assets/img/Model/ISOCertified.jpg';
import './Home.css';

const AboutUs = () => {
  return (
    <>
      <section className='bg-light' id='about'>
        <div className="container">
            <div className="row my-5 about_us">
                <h1 className='py-3'>About Us</h1>
                <div className="col-12 col-md-10">
                    <p style={{textIndent:'20px'}}><b><i>Dr Aqua Galaxy,</i></b>  where our commitment to health and sustainability drives 
                    everything we do.</p>
                    <p style={{textIndent:'20px'}}>Our diverse range of products, including our Alkaline and Copper water purifiers, is designed to cater to various needs and preferences. With storage capacities ranging from 10L to 24L, we ensure that our solutions fit seamlessly into your lifestyle, providing you with the purest water at your convenience.</p>
                </div>
                <div className="col-12 col-md-2">
                    <img src={ISO} alt="" style={{width:'100%'}} className='animate__animated animate__flash'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs
