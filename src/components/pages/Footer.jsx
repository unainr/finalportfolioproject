import React from "react";
import "../css/Footer.css";
import "../css/Respon.css";
import images from "../../assets/images/logo34.png";
const Footer = () => {
  return (
    <div>
      <section id="contact" className="footer_wrapper mt-3 mt-md-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-6 text-center text-md-start">
              <div className="footer-logo mb-3 mb-md-0">
                <img src={images} />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <ul className="list-unstyled d-flex justify-content-center justify-content-md-end justify-content-lg-center jus social-icon mb-3 mb-md-0">
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-unain7/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="copyright-text text-lg-start text-center mb-3 mb-lg-0">
                <p className="mb-0">
                  Copyright © <a href="#">UNANR</a>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
