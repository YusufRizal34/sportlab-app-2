import React from "react";

import HeroImage from "../assets/images/hero-image.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 pr-lg-5">
            <label className="mb-3 hero-caption">
              Forget Busy Work, <br />
              Start Healthy Life
            </label>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <a href="/shop-page" className="btn btn-hero">
              Shop Now
            </a>
          </div>
          <div className="col-lg-6 col-sm-12 hero-image-container">
            <img src={HeroImage} alt="hero for images" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
