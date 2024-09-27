import React from "react";
import "../css/Contact.css";
import "../css/Respon.css";
const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact_wrapper my-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-12 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
              <span className="subtitle">Let's get in touch</span>
              <div className="row call_details mb-4 ">
                <div className="col-sm-4">Call us directly:  <span>03089469544</span></div>
                <div className="col-sm-4 mb-3 mb-lg-2">
                 
                </div>
                <div className="col-sm-8 mb-4 mb-lg-2">
                <span>Contact Email: </span> <a href="mailto:munain605@gmail.com"> munain605@gmail.com</a>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
