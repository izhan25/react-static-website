import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import Image from "../components/Image";
import { PROJECT_NAME } from "../constants/project";
import AppointmentBtn from "../components/AppointmentBtn";

function SwimmingPool() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Swimming Pool Services" />
        <div className="mt-5 container mb-5">
          <section className="row">
            <div className="col-md-6 mb-5">
              <Image
                src="/assets/img/swimming-pool-display.jpg"
                className="rounded img-fluid"
              />
            </div>
            <div className="col-md-6">
              <p>
                If you looking for Swimming Pool Construction in Pakistan for
                your Pool Construction & Swimming Pool Repairing. We have been
                serving our clients widely for over a decade in all major cities
                across the Pakistan. Do you dream of have a beautiful and
                private swimming pool in your backyard? Are you looking for the
                best swimming pool construction company in the market? Search no
                more because your search ends at us. {PROJECT_NAME} is one of
                the most reputed Swimming pool construction companies in
                Pakistan.
              </p>
              <p>
                Our expert consultants offer a safe and reliable service for
                Landscape and Swimming Pool Construction & Maintenance. We have
                worked for customers in the cities Karachi, Lahore, Rawalpindi
                and Islamabad.
              </p>
            </div>
          </section>

          <section>
            <h3>Swimming Pool Construction</h3>
            <p>
              We have been in the field of swimming pool construction for over a
              decade. As a trusted builder, we have built swimming pools of
              several clients and have in most cases tried to provide with the
              best possible deal in the form of a customized package for our
              customers. This is because just like needs and preferences vary
              from client to client, so does the budget money. The budget plays
              a huge role in how the final outcome will be like. Be it small or
              a huge budget, we have solutions for one and all. The various
              types of swimming pool that we construct include,
            </p>
            <ul style={{ listStyle: "none" }}>
              {[
                "Private Swimming Pool",
                "Children Or Kids Swimming Pool",
                "Competition Or Training Swimming Pool",
                "Commercial Or Public Swimming Pool",
                "Ocean Swimming Pool",
                "Exercise Swimming Pool",
                "Hot Tubs",
                "Spa Pools",
                "Natural Ponds & Pools",
              ].map((item, index) => (
                <li key={index}>
                  <i className="icofont-check-circled mr-4 text-primary"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Swimming Pool Services</h3>
            <p>
              We try to create swimming pools that are dream projects of our
              clients. Hence, our specialists sit and discuss extensively with
              the clients at the very beginning of the project. This helps them
              understand the desires of the customers and enables them to adhere
              to the guidelines of the customers while drawing out the design of
              the swimming pool. At all levels, we constantly take approval of
              the client since their wish is our command. Some of the services
              that we provide to our customers in regard to swimming pool
              construction include,
            </p>
            <ul>
              {[
                "Swimming Pool Planning & Designing",
                "Swimming Pool Construction",
                "Swimming Pool Repairing",
                "Complete Maintenance Of Swimming Pool",
                "Re-Designing & Renovate Of Existing Swimming Pool Construction",
              ].map((item, index) => (
                <li key={index}>
                  <i className="icofont-check-circled mr-4 text-primary"></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <AppointmentBtn />

          <section>
            <h3 className="mr-1">Our Gallery</h3>
            <div className="row">
              {[
                "/assets/img/pool-1.jpg",
                "/assets/img/pool-4.jpg",
                "/assets/img/pool-5.jpg",
                "/assets/img/pool-6.jpg",
                "/assets/img/pool-9.jpg",
                "/assets/img/pool-10.jpg",
                "/assets/img/pool-11.jpg",
                "/assets/img/pool-12.jpg",
                "/assets/img/pool-13.jpg",
                "/assets/img/pool-14.jpg",
                "/assets/img/pool-15.jpg",
                "/assets/img/pool-16.jpg",
              ].map((item, index) => (
                <div className="col-md-3" key={index}>
                  <Image src={item} className="img-fluid img-thumbnail m-1" />
                </div>
              ))}
            </div>
          </section>

          <AppointmentBtn />
        </div>
      </main>
    </Container>
  );
}

export default SwimmingPool;
