import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_NAME, PROJECT_ADDRESS, PROJECT_PHONE, PROJECT_EMAIL } from "../constants/project";

function Footer() {
  return (
    <footer
      id="footer"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="500"
    >
      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe our news letter for updates
              </p>
            </div>
            <div className="col-lg-6">
              <form>
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/terms-of-service">Terms of service</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/servces/gardening">Gardening</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services/swimming-pool">Swimming Pool</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services/maintenance">Maintenance</Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <Link to="/services/electro-mechanical">Electro Mechanincal</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                {PROJECT_ADDRESS}
                <br />
                <strong>Phone:</strong> {PROJECT_PHONE[0]}
                <br />
                <strong>Email:</strong> {PROJECT_EMAIL}
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About {PROJECT_NAME}</h3>
              <p>
                Established in the UAE since 2018, {PROJECT_NAME} develops,
                manages and executes FM strategies to maximize the performance and
                lifecycle of client assets.
              </p>
              <div className="social-links mt-3">
                <Link to="!#" className="twitter">
                  <i className="bx bxl-twitter"></i>
                </Link>
                <Link to="!#" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </Link>
                <Link to="!#" className="instagram">
                  <i className="bx bxl-instagram"></i>
                </Link>
                <Link to="!#" className="linkedin">
                  <i className="bx bxl-linkedin"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>{PROJECT_NAME}</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <Link to="https://facebook.com/my-dream">MyDream Solutions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
