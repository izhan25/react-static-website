import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import { SERVICES } from "../constants/services-page-constants";

function Services() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Our Services" />
        
        <section className="service-details">
          <div className="container">
            <div className="row">
              {SERVICES.map((item, index) => (
                <div
                  className="col-md-6 d-flex align-items-stretch"
                  data-aos="fade-up"
                  key={index}
                >
                  <div className="card">
                    <div className="card-img">
                      <Image
                        className="rounded service-img"
                        src={item.image}
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={item.routerLink}>{item.title}</Link>
                      </h5>
                      <p className="card-text">{item.description}</p>
                      <div className="read-more">
                        <Link to={item.routerLink}>
                          <i className="icofont-arrow-right"></i> Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Services;
