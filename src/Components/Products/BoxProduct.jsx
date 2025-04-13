import React from 'react';
import boxImg from '../../assets/img/DrAquaBoxmrp.png';

const BoxProduct = () => {
  return (
    <>
      <section id="box-product" className='box_product'>
        <div className="container">
            <div className="row  my-5 box_page">
                <div className="col-12 col-md-5">
                    <img src={boxImg} alt="" height={"500px"} width={"100%"} className='box_img'/>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center content">
                  <h2 className='text-center fs-1'>Pure Water For <br/> Good 
                   <span style={{color: '#a9501c'}}> Health</span></h2>
                   <p className='product_Data'>Welcome to <i> <b>Dr Aqua Galaxy,</b></i> where innovation meets creativity! We are passionate about crafting unique experiences that resonate with our audience and inspire positive change. Our mission is to create products and services that not only meet the needs of our customers but also reflect our core values of sustainability, inclusivity,  and excellence.</p>
                   <h5>
                    Box MRP available at <b><i style={{color: '#a9501c'}}>20,500 /-</i></b>  & &nbsp;<b><i style={{color: '#a9501c'}}>48,500 /-</i></b>
                   </h5>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BoxProduct
