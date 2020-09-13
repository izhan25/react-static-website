import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import Image from "../components/Image";
import AppointmentBtn from "../components/AppointmentBtn";
import { PROJECT_NAME } from "../constants/project";

function ElectroMechanical() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Electro Mechanical Services" />
        <div className="mt-5 container mb-5">
          <section className="row">
            <div className="col-md-6 mb-5">
              <Image
                src="/assets/img/electro-mechanical-service.jpg"
                className="rounded img-fluid"
              />
            </div>
            <div className="col-md-6">
              <p>
                {PROJECT_NAME} undertakes all aspects of Electrical and
                Mechanical engineering as Principal or Trade Contractor, in
                combined or single discipline, from initial design to
                completion.
              </p>
              <p>
                We aim to complete projects to the highest standard, on time and
                within budget. We strive for total client satisfaction, with
                many clients retaining our services year on year and
                recommending us whenever the opportunity arises.
              </p>
              <p>
                We have developed a health safety and welfare system that
                ensures that we have a safe system of work for employees,
                sub-contractors and anyone else that is affected by our work.
                Health safety and welfare is continually monitoring and audited
                to ensure we achieves the highest level of health safety and
                welfare standards for us and our clients.
              </p>
            </div>
          </section>

          <AppointmentBtn />
        </div>
      </main>
    </Container>
  );
}

export default ElectroMechanical;
