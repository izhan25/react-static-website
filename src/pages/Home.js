import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { PROJECT_NAME } from "../constants/project";

function Home() {
  return (
    <Container transparentHeader page="Home">
      <Hero />
      <main id="main">
        <section className="services">
          <div className="container">
            <div className="mb-5">
              <h1 className="text-center">Our Services</h1>
            </div>
            <div
              className="row"
              // below line is for horizontal scrolling
              // style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}
            >
              <ServiceCard
                title="Gardening"
                description="We offer all kinds of decorative plants, Date Pam, Coconut trees, flowers, American Grass and seedlings as well."
                route="/services/gardening"
                boxclassName="icon-box-green"
                boxIcon="bx bxs-tree"
              />
              <ServiceCard
                title="Swimming pool"
                description="Swimming pool, Jacuzzi and Spa solutions. From construction and design to filter system installation and maintenance"
                route="/services/swimming-pool"
                boxclassName="icon-box-blue"
                boxIcon="bx bx-swim"
              />
              <ServiceCard
                title="Electro Mechanical"
                description="Industrial cleaning equipment, forklifts, aerial platforms, welding equipment, industrial batteries, electric motors etc"
                route="/services/electro-mechanical"
                boxclassName="icon-box-pink"
                boxIcon="bx bxl-stack-overflow"
              />
              <ServiceCard
                title="Maintenance"
                description="plumbing, electric work, wood work, metal & aluminium work etc all type of repair & maintenance service for domestic and commercial clients."
                route="/services/maintenance"
                boxclassName="icon-box-cyan"
                boxIcon="bx bx-home-heart"
              />
            </div>
          </div>
        </section>

        <section
          className="why-us section-bg"
          data-aos="fade-up"
          date-aos-delay="200"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 video-box">
                <img
                  src="assets/img/real-estate.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-home"></i>
                  </div>
                  <h4 className="title">
                    <Link to="/services/estate-agency">Real Estate Agency</Link>
                  </h4>
                  <p className="description">
                    We also provide real estate agency and property consultancy.
                    {PROJECT_NAME} is the leading property website in the Pakistan connecting
                    buyers, sellers and tenants, so that every real estate
                    requirement in the region is fulfilled in a seamless,
                    user-friendly manner.Going above and beyond just providing a
                    database of available listings for rent and sale, {PROJECT_NAME} has
                    taken the onus of becoming the most reliable source for ‘all
                    things real estate’. In the Pakistan today, every question that a
                    potential end user could encounter is answered through the
                    resources {PROJECT_NAME} has created.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-title">
              <h2>Features</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img
                  src="assets/img/gardening.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-4">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img
                  src="assets/img/features-2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Corporis temporibus maiores provident</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img
                  src="assets/img/features-3.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5">
                <h3>
                  Sunt consequatur ad ut est nulla consectetur reiciendis animi
                  voluptas
                </h3>
                <p>
                  Cupiditate placeat cupiditate placeat est ipsam culpa.
                  Delectus quia minima quod. Sunt saepe odit aut quia voluptatem
                  hic voluptas dolor doloremque.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check"></i> Facilis ut et voluptatem
                    aperiam. Autem soluta ad fugiat.
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img
                  src="assets/img/features-4.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>
                  Quas et necessitatibus eaque impedit ipsum animi consequatur
                  incidunt in
                </h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Home;
