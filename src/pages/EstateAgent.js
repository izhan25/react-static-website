import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import Image from "../components/Image";
import AppointmentBtn from "../components/AppointmentBtn";
import { PROJECT_NAME } from "../constants/project";

function EstateAgent() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Estate Agent Services" />
        <div className="mt-5 container mb-5">
          <section className="row">
            <div className="col-md-6 mb-5">
              <Image
                src="/assets/img/estate-agent-service.jpg"
                className="rounded img-fluid"
                style={{ height: 400 }}
              />
            </div>
            <div className="col-md-6">
              <h4 className="title">Real Estate Agency</h4>
              <p>
                We provide real estate agency and property consultancy.
                {PROJECT_NAME} is the leading property website in the Pakistan
                connecting buyers, sellers and tenants, so that every real
                estate requirement in the region is fulfilled in a seamless,
                user-friendly manner. Going above and beyond just providing a
                database of available listings for rent and sale,
              </p>
              <p>
                {PROJECT_NAME} has taken the onus of becoming the most reliable
                source for ‘all things real estate’. In the Pakistan today,
                every question that a potential end user could encounter is
                answered through the resources {PROJECT_NAME} has created.
              </p>
            </div>
          </section>

          <AppointmentBtn />
        </div>
      </main>
    </Container>
  );
}

export default EstateAgent;
