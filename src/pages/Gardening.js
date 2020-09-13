import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import Image from "../components/Image";
import AppointmentBtn from "../components/AppointmentBtn";

function Gardening() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Gardening Services" />
        <div className="mt-5 container mb-5">
          <section className="row">
            <div className="col-md-6 mb-5">
              <Image
                src="/assets/img/gardening-service.jpg"
                className="rounded img-fluid"
              />
            </div>
            <div className="col-md-6">
              We have a vision to provide sustainable, durable and environment
              friendly gardening and water solutions to our valuable clients. We
              facilitate communities, individuals, organizations and
              institutions in soft and hard landscaping, organic lawn care
              services, provision and supply of gardening accessories, plants,
              shrubs, trees, organic fertilizers and weeds solutions. Rising
              Green has also expert in urban green transformation by using
              state-of-the-art techniques like hydroponic, raised bed, off-grid,
              growing bags, vertical growing and other tools and methods by
              using a small piece of land. We also provide consultancy,
              construction and Management of tunnel farms for growing off season
              vegetables as well our experts helps you to developed organic
              honey bee and poultry farming at household & commercial level. We
              also provide a complete set environmental research and solutions
              to its clients.
            </div>
          </section>

          <section>
            <h3>Gardening Services</h3>
            <p>
              We provide commercial & residential <b>lawn maintenance</b> and
              care services ranging from lawn mowing to fertilization after
              research & soil test. Keeping your lawn green, vibrant, healthy,
              and free of weeds is a job for experts. Our team provides regular
              services designed to ensure that your lawn stays looking its best
              year-roun.
            </p>
            <p>
              Designing a beautiful <b>landscape</b> takes effort and planning.
              Our Experts can help you find the design that works for you,
              capturing your preferences and expressing your personality through
              greens pace. Our experts are trained in horticulture and design.
            </p>
            <p>
              If you want to keep your residential turf looking beautiful and
              healthy, you need to schedule regular turf maintenance. The expert
              team at The Grounds Guys knows how to perform effective services
              on your turf to ensure it stays vibrant throughout the year. We
              deliver excellent results in all we do, providing professional
              turf support for homeowners.
            </p>
            <p>In addition to that we also provide following.</p>
            <ul style={{ listStyle: "none" }}>
              {[
                "Lawn maintenance services",
                "Landscape design services",
                "Turf maintenance",
                "Outdoor lighting",
                "Irrigation services",
                "Organic kitchen gardening",
                "Fall clean up services",
                "Rooftop lawn",
                "Hardscaping",
                "WPC decks installation",
                "Pruning services",
              ].map((item, index) => (
                <li key={index}>
                  <i className="icofont-check-circled mr-4 text-primary"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <AppointmentBtn />
         
        </div>
      </main>
    </Container>
  );
}

export default Gardening;
