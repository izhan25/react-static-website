import React from "react";
import Breadrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import { FACTS } from "../constants/about-page-constants";
// import { TESTIMONIALS, OUR_SKILLS } from "../constants/about-page-constants";
import { PROJECT_NAME } from "../constants/project";
import Image from '../components/Image';

function About() {
  return (
    <Container page="About">
      <main id="main">
        <Breadrumb title="About Us" />

        <section className="about" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Image
                  src="assets/img/about.jpg"
                  className="img-fluid rounded"
                  alt="about us"
                />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h3>Who We Are</h3>
                <p className="font-italic">
                  {PROJECT_NAME} Is a major player in Electro-Mechanical fields
                  has a good C.V for Supplies and Turnkey Projects and well
                  known customers in the Gulf and Pakistan market. Our Primary
                  purpose is to complete the supply, install, service and
                  upgrade chains in the Electro Mechanical fields. With our
                  staff experience and technical know-how, We have become a one
                  stop shop for our clients' total Electro-Mechanical needs.{" "}
                  {PROJECT_NAME} enjoys a strong presence on various markets in:
                </p>
                <ul>
                  <div className="row">
                    <li className="col">
                      <i className="icofont-check-circled"></i> TRADING
                    </li>
                    <li className="col">
                      <i className="icofont-check-circled"></i> MAINTENANCE
                    </li>
                  </div>
                  <div className="row">
                    <li className="col">
                      <i className="icofont-check-circled"></i> CONTRACTING
                    </li>
                    <li className="col">
                      <i className="icofont-check-circled"></i> MANUFACTURING
                    </li>
                  </div>
                  <div className="row">
                    <li className="col">
                      <i className="icofont-check-circled"></i> SERVICES
                    </li>
                    <li className="col">
                      <i className="icofont-check-circled"></i> DEVELOPMENT
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="about container" data-aos="fade-up">
          <p>
            Within a very competitive position, this is the result of high
            efficiency and full autonomy in phases of:
          </p>
          <ul>
            <div className="row">
              <li className="col">
                <i className="icofont-favourite"></i> PLANNING COORDINATION
              </li>
              <li className="col">
                <i className="icofont-favourite"></i> ENGINEERING PERSONALITY
              </li>
            </div>
            <div className="row">
              <li className="col">
                <i className="icofont-favourite"></i> QUALITY CONTROL
              </li>
              <li className="col">
                <i className="icofont-favourite"></i> AFTER SALES
              </li>
            </div>
          </ul>
          <p>
            Today <b>{PROJECT_NAME}</b> is one of the leading MEP Contractors
            operating in MEP sectors, and is capable of offering full range of
            Contracting, Engineering Services in the fields Energy, Electrical,
            Lighting, Electro-mechanical (MEP), low current systems, Safety &
            Security, Measurements & Meters, Process Equipment, Motors,
            Generators, Pumps, Water, Drainage, Plumbing, Pipe lines & Fittings,
            Oil & Gas field Services, Factorial Installations, Marking, Fencing
            and Automatic Control, BMS & Automation, HVAC systems, Ducting.,
            Chillers, Landscaping and Swimming Pools.
          </p>
          <p>
            Every day, <b>{PROJECT_NAME}</b> offers (Optimum & Economical)
            Quotes to its customers, required for MEP Services & Solutions
            according to approved standards and an ever wider range of Products
            & Services.
          </p>
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

        <section className="container skills" data-aos="fade-up">
          <h3>Working for you.</h3>
          <p>
            A flawless facility is a great basis for business success. We take
            care of all the routine facility management and maintenance tasks,
            so that you don’t have to. We’ll deliver efficiencies, employee
            comfort, safety and reduced costs, that you may never have thought
            possible.
          </p>
          <br />
          <h3>We value our people.</h3>
          <p>
            We take the time to recruit dedicated professionals with values that
            match the firm. We invest in their ongoing training, regularly
            support them on-site, and always recognise a job well-done. It’s why
            our best people stay with us.
          </p>
        </section>

        {/* <section className="skills" data-aos="fade-up">
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
        </section> */}

        {/* <section className="testimonials" data-aos="fade-up">
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
                  <Image src={item.image} className="testimonial-img" alt="" />
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
        </section> */}
      </main>
    </Container>
  );
}

export default About;
