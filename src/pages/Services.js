import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";
import Image from "../components/Image";

function Services() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Our Services" />

        <section className="service-details">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="card">
                  <div className="card-img">
                    <Image src="assets/img/service-details-1.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to="!#">Our Mission</Link>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat
                    </p>
                    <div className="read-more">
                      <Link to="!#">
                        <i className="icofont-arrow-right"></i> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="card">
                  <div className="card-img">
                    <Image src="assets/img/service-details-2.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to="!#">Our Plan</Link>
                    </h5>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem aperiam, eaque
                      ipsa quae ab illo inventore veritatis et quasi architecto
                      beatae vitae dicta sunt explicabo
                    </p>
                    <div className="read-more">
                      <Link to="!#">
                        <i className="icofont-arrow-right"></i> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="card">
                  <div className="card-img">
                    <Image src="assets/img/service-details-3.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to="!#">Our Vision</Link>
                    </h5>
                    <p className="card-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                      fugit, sed quia magni dolores eos qui ratione voluptatem
                      sequi nesciunt Neque porro quisquam est, qui dolorem ipsum
                      quia dolor sit amet
                    </p>
                    <div className="read-more">
                      <Link to="!#">
                        <i className="icofont-arrow-right"></i> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
              >
                <div className="card">
                  <div className="card-img">
                    <Image src="assets/img/service-details-4.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to="!#">Our Care</Link>
                    </h5>
                    <p className="card-text">
                      Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                      quisquam laudantium voluptatem. In molestiae earum ab sit
                      esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil
                      aut incidunt aut
                    </p>
                    <div className="read-more">
                      <Link to="!#">
                        <i className="icofont-arrow-right"></i> Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Services;
