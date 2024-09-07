import React from "react";
import "../css/Services.css";
import "../css/Respon.css";
import images1 from "../../assets/images/service/service-1.svg";
import images2 from "../../assets/images/service/service-2.svg";
import images3 from "../../assets/images/service/service-3.svg";
import images4 from "../../assets/images/service/service-4.svg";
const Services = () => {
  return (
    <div>
      <section id="services" className="services_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center mb-4">
              <span className="subtitle">What I can do for you</span>
              <h2>My Awesome Service</h2>
              {/* <p>There are many variations of passages of Lorem Ipsum available,
                <br className="d-none d-md-block">
                but the majority have suffered alteration.</p> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <img src={images1} alt="service" className="img-fluid mb-4" />
                  <h3>Business Strategy</h3>
                  <p>
                    I throw myself down among the tall grass by the stream as
                    Ilie close to the earth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <img src={images2} alt="service" className="img-fluid mb-4" />
                  <h3>Website Development</h3>
                  <p>
                    We’ll handle everything from to app development process
                    until it is time to make your project live.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <img src={images3} alt="service" className="img-fluid mb-4" />
                  <h3>UX Consulting</h3>
                  <p>
                    A UX consultant is responsible for many of the same tasks as
                    a UX designer, but they typically.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <img src={images3} alt="service" className="img-fluid mb-4" />
                  <h3>Mobile App Development</h3>
                  <p>
                    SEO optimization is a multifaceted strategy that begins with
                    thorough keyword
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <img src={images4} alt="service" className="img-fluid mb-4" />
                  <h3>Marketing & Reporting</h3>
                  <p>
                    We’ll help you optimize your business processes to maximize
                    profitability
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-md-start text-center">
                  <img src={images3} alt="service" className="img-fluid mb-4" />
                  <h3>Web Development</h3>
                  <p>
                    Web development is the multifaceted process of crafting
                    websites and web applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
