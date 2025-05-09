import React from "react";
import BioAlkaline from "../../assets/img/BioAlkalineCop12L.jpg";
import StarAlkaline from "../../assets/img/StartAlkalinecop10L.jpg";
import Primium from "../../assets/img/PrimiumALkalineCopp10L.jpg";
import Pluto from "../../assets/img/PlutoAlkalineCop12L.jpg";
import Mercury from '../../assets/img/MercuryAlkaline13L.jpg';
import Plus from '../../assets/img/blueImg.jpg';
import UTC from '../../assets/img/UTCSinkRO.jpg';
import BioAlkalineCop from '../../assets/img/BioAlkalineCopper12L.jpg';
// import './Product.css';

const AllProducts = () => {
  return (
    <>
      <section id="products" className="my-3">
        <div className="container">
        <h1 className="py-3">All Products</h1>
        {/* <p>All type of Water Filter Available</p> */}
          <div className="row all_products">
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4" >
              <div className="card">
                <img src={StarAlkaline} className="card-img-top" alt="star alkaline" />
                <div className="card-body">
                  <h5 className="card-title">Star (Alkaline+Copper)</h5>
                  <p className="card-text">
                   Storage Capacity 10Ltr
                  </p>
                  <p>Price : <b>&#8377; 18,500/-</b></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={BioAlkaline} className="card-img-top" alt="Bio" />
                <div className="card-body">
                  <h5 className="card-title">Bio (Alkaline+Copper)</h5>
                  <p className="card-text">
                   Storage Capacity 12Ltr
                  </p>
                  <p>Price : <b>&#8377; 18,500/-</b></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={Primium} className="card-img-top" alt="primium" />
                <div className="card-body">
                  <h5 className="card-title">Primium (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 10Ltr
                  </p>
                  <p>Price : <b>&#8377; 20,500/-</b></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={Pluto} className="card-img-top" alt="pluto" />
                <div className="card-body">
                  <h5 className="card-title">Pluto (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 12Ltr
                  </p>
                  <p>Price : <b>&#8377; 18,500/-</b></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={Mercury} className="card-img-top" alt="mercury" />
                <div className="card-body">
                  <h5 className="card-title">Mercury (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 13Ltr
                  </p>
                  <p>Price : <b>&#8377; 20,500/-</b></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2  mt-md-4">
              <div className="card">
                <img src={Plus} className="card-img-top" alt="plus" />
                <div className="card-body">
                  <h5 className="card-title">Plus (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 12Ltr
                  </p>
                  <p>Price : <b>&#8377; 16,500/-</b></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2  mt-md-4">
              <div className="card">
                <img src={UTC} className="card-img-top" alt="utc" />
                <div className="card-body">
                  <h5 className="card-title">UTC under Sink RO</h5>
                  {/* <p className="card-text">
                  Storage Capacity 12L /18L /24L
                  </p> */}
                  <p className="mb-0">Price : 12Ltr - <b>&#8377; 18,500/-</b></p>
                  <p className="mb-0">Price : 18Ltr - <b>&#8377; 20,500/-</b></p>
                  <p>Price : 24Ltr - <b>&#8377; 24,500/-</b></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2  mt-md-4">
              <div className="card">
                <img src={BioAlkalineCop} className="card-img-top" alt="bio alkaline" />
                <div className="card-body">
                <h5 className="card-title">Bio (Alkaline+Copper)</h5>
                  <p className="card-text">
                   Storage Capacity 12Ltr
                  </p>
                  <p>Price : <b>&#8377; 18,500/-</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
