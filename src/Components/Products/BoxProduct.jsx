import React from 'react';
import boxImg from '../../assets/img/DrAquaBoxmrp.png';
import './Product.css';

const BoxProduct = () => {
  return (
    <>
      <section id="box-product" className='box_product'>
        <div className="container">
            <div className="row  my-5 box_page py-3">
                <div className="col-12 col-md-5">
                    <img src={boxImg} alt="box price" height={"600px"} width={"100%"} className='box_img'/>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center content">
                  {/* <h2 className='text-center fs-1 mb-4'>Pure Water For <br/> Good 
                   <span style={{color: '#a9501c'}}> HEALTH</span></h2> */}
                   {/* <p className='product_Data'>Welcome to <i> <b>Dr Aqua Galaxy,</b></i> where innovation meets creativity! We are passionate about crafting unique experiences that resonate with our audience and inspire positive change. Our mission is to create products and services that not only meet the needs of our customers but also reflect our core values of sustainability, inclusivity,  and excellence.</p> */}
                  <h3 className='my-3 text-uppercase' style={{fontSize:'28px'}}>Specifications</h3>
                  <table className="table">
  <thead>
    <tr>
    
      <th scope="col">Applications</th>
      <th scope="col">Suitable for Purification of Bracklash / Tap Water</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td className='borber-b'>Purification Capacity</td>
      <td>Upto 20 LPH*</td>
    </tr>
    <tr>
     
      <td>Body Material</td>
      <td>ABS Food Grade Plastic</td>
    </tr>
    <tr>
     
      <td>Mounting</td>
      <td>On the Wall</td>
    </tr>
    <tr>
     
     <td>Inlet Water Pressure / Temp (MIN)</td>
     <td>0.3 kg / cm<sup>2</sup> or 4.3psi / 10&deg; C of 50&deg; F</td>
   </tr>
   <tr>
     
     <td>Inlet Water Pressure / Temp (MAX)</td>
     <td>3 kg / cm<sup>2</sup> or 42.7psi / 40&deg; C of 104&deg; F</td>
   </tr>
   <tr>
     
     <td>Weight</td>
     <td>9.4 kg</td>
   </tr>
   <tr>
     
     <td>Storage Capacity</td>
     <td>14 L</td>
   </tr>
   <tr>
     
     <td>Purification Production Rate</td>
     <td>20L/hr or 0.33L/min</td>
   </tr>
   <tr>
     
     <td>Maximum Duty Cycle</td>
     <td>100 L /Day</td>
   </tr>
   <tr>
     
     <td>Power Consumption</td>
     <td>60 W</td>
   </tr>
   
   <tr>
     
     <td>Membrane Type</td>
     <td>Thin Film Composite RO</td>
   </tr>
   <tr>
     
     <td>Booster Pump Voltage</td>
     <td>24 V DC</td>
   </tr>
   <tr>
     
     <td>Input Power Supply</td>
     <td>Single Phase 220 &#177; 10 V AC, 50 Hz</td>
   </tr>
  </tbody>
</table>
                  
                </div>

            </div>
        </div>
      </section>
    </>
  )
}

export default BoxProduct
