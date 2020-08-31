import React from "react";
import Breadrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import {
  TESTIMONIALS,
  OUR_SKILLS,
  FACTS,
} from "../constants/about-page-constants";

function About() {
  return (
    <Container page="About">
      <main id="main">
        <Breadrumb title="About Us" />

        <section className="about" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src="assets/img/about.jpg"
                  className="img-fluid rounded"
                  alt="about us"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
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
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Duis aute irure
                    dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i> Ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate trideta storacalaperda
                    mastiro dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
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

        <section className="facts section-bg" data-aos="fade-up">
          <div className="container">
            <div className="row counters">
              {FACTS.map((item, index) => (
                <div key={index} className="col-lg-3 col-6 text-center">
                  <span data-toggle="counter-up">{item.counter}</span>
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="skills" data-aos="fade-up">
          <div className="container">
            <div className="section-title">
              <h2>Our Skills</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="skills-content">
              {OUR_SKILLS.map((item, index) => (
                <div key={index} className="progress">
                  <div
                    className={`progress-bar ${item.color}`}
                    role="progressbar"
                    aria-valuenow={item.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span className="skill">
                      {item.name} <i className="val">{item.value}%</i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" data-aos="fade-up">
          <div className="container">
            <div className="section-title">
              <h2>Tetstimonials</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="owl-carousel testimonials-carousel">
              {TESTIMONIALS.map((item, index) => (
                <div key={index} className="testimonial-item">
                  <img src={item.image} className="testimonial-img" alt="" />
                  <h3>{item.name}</h3>
                  <h4>{item.designation}</h4>
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {item.quote}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default About;
