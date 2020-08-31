import React from "react";
import { PROJECT_NAME, PROJECT_OVERVIEW } from "../constants/project";
import { Link } from "react-router-dom";

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
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animated fadeInDown">
              Welcome to <span>{PROJECT_NAME}</span>
            </h2>
            <p className="animated fadeInUp">
              {PROJECT_OVERVIEW}
            </p>
            <Link to="/about" className="btn-get-started animated fadeInUp">
              Read More
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animated fadeInDown">Our Mission</h2>
            <p className="animated fadeInUp">
              To achieve customer satisfaction through innovative designs,
              quality products and committed services by utilizing international
              exposure
            </p>
            <Link to="/about" className="btn-get-started animated fadeInUp">
              Read More
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animated fadeInDown">Our Vision</h2>
            <p className="animated fadeInUp">
              To be an ever-positive contributor to our clients’ operations, by
              ensuring the safest and most professional management of their
              facilities. We do this through constant innovation and adoption
              evolving, global best practices, in the field of professional
              facilities management.
            </p>
            <Link to="/about" className="btn-get-started animated fadeInUp">
              Read More
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <div className="carousel-container">
            <h2 className="animated fadeInDown">What We Offer</h2>
            <p className="animated fadeInUp">
              Services like Swimming Pool , Gardening, Electro-Mechanical and
              more
            </p>
            <Link to="/about" className="btn-get-started animated fadeInUp">
              Read More
            </Link>
          </div>
        </div>

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
