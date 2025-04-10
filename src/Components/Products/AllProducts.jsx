import React from "react";
import BioAlkaline from "../../assets/img/BioAlkalineCop12L.jpg";
import StarAlkaline from "../../assets/img/StartAlkalinecop10L.jpg";
import Primium from "../../assets/img/PrimiumALkalineCopp10L.jpg";
import Pluto from "../../assets/img/PlutoAlkalineCop12L.jpg";
import Mercury from '../../assets/img/MercuryAlkaline13L.jpg';
import Plus from '../../assets/img/PlusALkaline12L.jpg';
import UTC from '../../assets/img/UTCSinkRO.jpg';
// import './Product.css';

const AllProducts = () => {
  return (
    <>
      <section id="products">
        <div className="container">
        <h1 className="py-3">All Products</h1>
          <div className="row all_products">
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={StarAlkaline} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={BioAlkaline} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={Primium} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={Pluto} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={Mercury} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={Plus} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
              <div class="card">
                <img src={UTC} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
