import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { PROJECT_NAME } from "../constants/project";
import Image from "../components/Image";

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
                <Image
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
                    {PROJECT_NAME} is the leading property website in the
                    Pakistan connecting buyers, sellers and tenants, so that
                    every real estate requirement in the region is fulfilled in
                    a seamless, user-friendly manner.Going above and beyond just
                    providing a database of available listings for rent and
                    sale, {PROJECT_NAME} has taken the onus of becoming the most
                    reliable source for ‘all things real estate’. In the
                    Pakistan today, every question that a potential end user
                    could encounter is answered through the resources{" "}
                    {PROJECT_NAME} has created.
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
                <Image
                  src="assets/img/gardening.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-4">
                <h3>Gardening Services</h3>
                <p className="font-italic">
                  We facilitate communities, individuals, organizations and
                  institutions in soft and hard landscaping, organic lawn care
                  services, provision and supply of gardening accessories,
                  plants, shrubs, trees, organic fertilizers and weeds
                  solutions.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check"></i> Lawn maintenance services
                  </li>
                  <li>
                    <i className="icofont-check"></i> Landscape design services
                  </li>
                </ul>
                <Link
                  to="/services/gardening"
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <Image
                  src="assets/img/maintenance.png"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Maintenance Services</h3>
                <p className="font-italic">
                  We have a professional and experienced plumbers, electricians,
                  carpenters, wood workers, painters, tinsmiths, handymans,
                  architects and construction workers. We can help you with all
                  type of repairing and installation solution and any other
                  related services at your convenient time. We guarantee best
                  price and your 100% satisfaction.
                </p>
                <Link
                  to="/services/maintenance"
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 mb-3">
                <Image
                  src="assets/img/pool.jpeg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-2">
                <h3>Swimming Pool Services</h3>
                <p className="font-italic">
                  We have been serving our clients widely for over a decade in
                  all major cities across the Pakistan. Do you dream of have a
                  beautiful and private swimming pool in your backyard? Are you
                  looking for the best swimming pool construction company in the
                  market? Search no more because your search ends at us. We
                  favilitate with:
                </p>
                <ul>
                  <li>
                    <i className="icofont-check"></i> Private Swimming Pool
                  </li>
                  <li>
                    <i className="icofont-check"></i> Commercial Or Public
                    Swimming Pool
                  </li>
                </ul>
                <Link
                  to="/services/swimming-pool"
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </Link>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <Image
                  src="assets/img/electro-mechanical.jpg"
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Electro Mechanical Services</h3>
                <p className="font-italic">
                  {PROJECT_NAME} undertakes all aspects of Electrical and
                  Mechanical engineering as Principal or Trade Contractor, in
                  combined or single discipline, from initial design to
                  completion.
                </p>
                <Link
                  to="/services/electro-mechanical"
                  className="btn btn-primary btn-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Home;
