import React from 'react';
import LPH from '../../assets/img/50-80lph.jpg';
import membrane from '../../assets/img/80membrane.jpg';
import pump from '../../assets/img/300gpdpump.jpg';
import './Product.css';


const OtherProducts = () => {
  return (
    <>
         <section id="otherproducts">
              <div className="container">
              <h1 className="py-3 my-3">Other Products</h1>
                <div className="row other_products all_products">
                  <div className="offset-lg-1 col-12 col-md-4 col-lg-3 mt-2 mt-md-0 ">
                    <div className="card"  >
                      <img src={LPH} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">50-80LPH <br/> (with Pressure Gauge)</h5>
                        {/* <p className="card-text">
                         Storage Capacity 10L
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                    <div className="card"  >
                      <img src={membrane} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Membrane 80/100/120gpd</h5>
                        {/* <p className="card-text">
                         Storage Capacity 12L
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0 ">
                    <div className="card">
                      <img src={pump} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">Pump 300gpd</h5>
                        {/* <p className="card-text">
                        Storage Capacity 10L
                        </p> */}
                      </div>
                    </div>
                  </div>
      
                 
                </div>
              </div>
            </section>
    </>
  )
}

export default OtherProducts
