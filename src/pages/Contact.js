import React from "react";
import Container from "../components/Container";
import {
  PROJECT_ADDRESS,
  PROJECT_EMAIL,
  PROJECT_PHONE,
} from "../constants/project";
import ContactForm from "../components/ContactForm";
import Breadrumb from "../components/Breadcrumb";

function Contact() {
  return (
    <Container>
      <main id="main">
        <Breadrumb title="Contact Us" />

        <section
          className="contact"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>{PROJECT_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      {PROJECT_EMAIL.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bx bx-phone-call"></i>
                      <h3>Call Us</h3>
                      <p>
                        {PROJECT_PHONE.map((phone, i) => (
                          <span key={i}>
                            {phone}
                            <br />
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="map mt-2">
          <div className="container-fluid p-0">
            <iframe
              title="address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4299.380930063433!2d67.13825121746065!3d25.022736450535774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb346f552badeb9%3A0x3ca73c50782da8ae!2sSector%20T%20Gulshan-e-Maymar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1599388684247!5m2!1sen!2s"
              aria-hidden="false"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </section>
      </main>
    </Container>
  );
}

export default Contact;
