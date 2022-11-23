import React from "react";

import BannerImage1 from "../assets/images/banner-diskon.jpg";
import BannerImage2 from "../assets/images/banner-diskon2.jpg";
import Carousel from "react-bootstrap/Carousel";

export default function Banner() {
  return (
    <section>
      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              src={BannerImage1}
              className="d-block w-100"
              alt="banner diskon"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={BannerImage2}
              className="d-block w-100"
              alt="banner diskon"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
