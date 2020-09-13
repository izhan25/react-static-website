import React from "react";
import Container from "../components/Container";
import Breadrumb from "../components/Breadcrumb";
import Image from "../components/Image";
import AppointmentBtn from "../components/AppointmentBtn";
import { PROJECT_NAME } from "../constants/project";

function Maintenance() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Maintenance Services" />
        <div className="mt-5 container mb-5">
          <section className="row">
            <div className="col-md-6 mb-5">
              <Image
                src="/assets/img/maintenance-service.jpg"
                className="rounded img-fluid"
                style={{ height: 400 }}
              />
            </div>
            <div className="col-md-6">
              <p>
                <b>{PROJECT_NAME}</b> have a professional and experienced
                plumbers, electricians, carpenters, wood workers, painters,
                tinsmiths, handymans, architects and construction workers. We
                can help you with all type of repairing and installation
                solution and any other related services at your convenient time.
                We guarantee best price and your 100% satisfaction.
              </p>
              <p>
                <b>Experienced team of professionals</b> We have a professional
                and experienced team of technicians with years of experience in
                hand of their relevant fields. That's we can take care of works
                of different type of industries at the same time. Contact us for
                reliable work for a fair price.
              </p>
              <p>
                <b>If our customers are happy, so we are</b> We give priority to
                our customers and take our customer's feedback very seriously.
                That is the only reason we have so many happy customer in very
                short time. If you already use our services, give us your
                valuable feedback and suggestions.
              </p>
            </div>
          </section>

          <section>
            <h3>Maintenance Services</h3>
            <p>We provide following maintenance services for our clients</p>
            {[
              {
                title: "Plumbing",
                description: `
                    We deal in almost all kind of plumbing work which includes PPR
                    Fittings, CPVC Fitting and similar. Be it a major contract or a
                    minor repair work, just give us a call and get your plumbing
                    worries fixed, once and for all.
                  `,
              },
              {
                title: "Electrician",
                description: `
                  From a ceiling fan installation to a commercial wiring for your
                  now home and office we do it all. We have electricians who can get
                  the job done with pure satisfaction. Book us and leave it on us!
                  `,
              },
              {
                title: "Carpenter",
                description: `
                  Do you have to get a modular kitchen customized? Or do you plan to
                  change the cloth for your sofa? Or do you want to get some those
                  paintings up on the wall? EasyFix is a one call solution partner
                  for all your needs.
                  `,
              },
              {
                title: "AC & Refrigerators",
                description: `
                  AC & Refrigerators is a common problem in the country these days.
                  We are specialized in repairing your AC and refrigerators. Just
                  call us to give us a try and we promise to deliver quality and
                  satisfaction.
                  `,
              },
              {
                title: "Generators",
                description: `
                  We are fully aware that your product depends on power supply, and
                  generators can provide you best power back up during the shortage
                  of your power supply. For this purpose the Generators need quality
                  maintenance & repair.
                  `,
              },
              {
                title: "Mason",
                description: `
                  We offer complete masonry services to commercial and residential
                  customer. All our masons are well experienced and work under
                  professional supervision.
                  `,
              },
              {
                title: "Painter",
                description: `
                  Bored of seeing the same paint every day? Get a new coat and make
                  your walls look attractive. We provide with superior paint
                  services to make your walls look good. May it be your office or
                  home; we guarantee quality service to you.
                  `,
              },
            ].map((item, index) => (
              <div key={index}>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            ))}
          </section>

          <AppointmentBtn />
        </div>
      </main>
    </Container>
  );
}

export default Maintenance;
