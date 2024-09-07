import React from "react";
import "../css/Banner.css";
import "../css/Respon.css";

const Banner = () => {
  return (
    <div>
      <section id="home" className="banner_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center text-md-start">
              <h6>WELCOME TO MY WORLD</h6>
              <h1>
                Hey! I’m Muhammad Unain
                <br />
                <span id="element" className="fst-italic">
                  Web Developer
                </span>
                <br />
              </h1>

              <div className="mt-4">
                <a className="main-btn" href="/cvpdf.pdf">
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
