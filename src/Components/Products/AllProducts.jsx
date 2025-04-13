import React from "react";
import BioAlkaline from "../../assets/img/BioAlkalineCop12L.jpg";
import StarAlkaline from "../../assets/img/StartAlkalinecop10L.jpg";
import Primium from "../../assets/img/PrimiumALkalineCopp10L.jpg";
import Pluto from "../../assets/img/PlutoAlkalineCop12L.jpg";
import Mercury from '../../assets/img/MercuryAlkaline13L.jpg';
import Plus from '../../assets/img/blueImg.jpg';
import UTC from '../../assets/img/UTCSinkRO.jpg';
// import './Product.css';

const AllProducts = () => {
  return (
    <>
      <section id="products">
        <div className="container">
        <h1 className="py-3">All Products</h1>
        {/* <p>All type of Water Filter Available</p> */}
          <div className="row all_products">
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={StarAlkaline} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Star (Alkaline+Copper)</h5>
                  <p className="card-text">
                   Storage Capacity 10L
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={BioAlkaline} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Bio (Alkaline+Copper)</h5>
                  <p className="card-text">
                   Storage Capacity 12L
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={Primium} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Primium(Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 10L
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={Pluto} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Pluto (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 12L
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-4">
              <div className="card">
                <img src={Mercury} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Mercury (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 13L
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2  mt-md-4">
              <div className="card">
                <img src={Plus} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Plus (Alkaline+Copper)</h5>
                  <p className="card-text">
                  Storage Capacity 12L
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2  mt-md-4">
              <div className="card">
                <img src={UTC} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">UTC under Sink RO</h5>
                  <p className="card-text">
                  Storage Capacity 12L /18L /24L
                  </p>
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
