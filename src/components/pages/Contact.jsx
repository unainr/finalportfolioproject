import React from "react";
import "../css/Contact.css";
import "../css/Respon.css";
const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact_wrapper">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-12 order-2 order-lg-1 pe-lg-5 text-lg-start text-center">
              <span className="subtitle">Let's Say Hi</span>
              <h2>Contact</h2>
              <div className="row call_details mb-4">
                <label className="col-sm-4">Call us directly:</label>
                <div className="col-sm-4 mb-3 mb-lg-2">
                  <a href="tel:03089469544">03089469544</a>
                </div>
                <label className="col-sm-4">Contact Email:</label>
                <div className="col-sm-8 mb-4 mb-lg-2">
                  <a href="mailto:munain605@gmail.com">munain605@gmail.com</a>
                </div>
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email..."
                    autoComplete="off"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Write a Message..."
                    rows="4"
                    autoComplete="off"
                  ></textarea>
                </div>
                <button type="submit" className="main-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
