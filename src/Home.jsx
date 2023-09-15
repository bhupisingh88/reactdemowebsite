import React from "react";
import del_img from "../src/images/delivery.avif"
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="row col-12 mx-auto">
          <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 d-flex justify-content-center flex-column">
            <h1>
              Grow your business with <strong className="brandname">Bhupi Tutorial</strong>
            </h1>
            <h2 className="my-3">
              We are the team of talented developer making websites
            </h2>
            <div className="mt-3">
              <NavLink to="/service" className="btn btn-outline-info">Get Started</NavLink>
            </div>
          </div>
          <div className="col-md-6 order-1 order-lg-2 header-img">
                <img src={del_img} className="img-fluid animated"></img>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
