import React from 'react';
import boxImg from '../../assets/img/DrAquaBoxmrp.jpg';

const BoxProduct = () => {
  return (
    <>
      <section id="box-product">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={boxImg} alt="" height={"500px"} width={"100%"}/>
                </div>
                <div className="col-12 col-md-6">
                  <h2>Pure Water For <br/> Good 
                   <span> Health</span></h2>
                   <h3>RO + UV + UF + TDS</h3>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BoxProduct
