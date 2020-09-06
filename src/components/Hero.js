import React from "react";
import { Link } from "react-router-dom";
import { HERO_CAROUSAL_ITEMS } from "../constants/home-page-constants";

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex justify-cntent-center align-items-center"
    >
      <div
        id="heroCarousel"
        className="container carousel carousel-fade"
        data-ride="carousel"
      >
        {HERO_CAROUSAL_ITEMS.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 && "active"}`}
          >
            <div className="carousel-container">
              <h2 className="animated fadeInDown">{item.title}</h2>
              <p className="animated fadeInUp">{item.description}</p>
              <Link to="/about" className="btn-get-started animated fadeInUp">
                Read More
              </Link>
            </div>
          </div>
        ))}

        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bx bx-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon bx bx-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
