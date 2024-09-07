import React from "react";
import "../css/About.css";
import "../css/Respon.css";
const About = () => {
  return (
    <div>
      <section id="about" className="about_wrapper">
        <div className="container py-4">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-12 ps-lg-5 text-center text-lg-start">
              <div className="my-3 my-lg-0">
                <span className="subtitle">My About Details</span>
                <h2>About Me</h2>
                <p>
                  "Hi! I'm a passionate FullStack Developer. I creating websites
                  that look great and work smoothly Let's build something
                  amazing together"
                </p>
              </div>
              <div className="pt-4">
                <ul
                  className="nav nav-pills justify-content-center justify-content-lg-between mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-skill-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-skill"
                      type="button"
                      role="tab"
                      aria-controls="pills-skill"
                      aria-selected="true"
                    >
                      Main Skills
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-experience-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-experience"
                      type="button"
                      role="tab"
                      aria-controls="pills-experience"
                      aria-selected="false"
                    >
                      Experience
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-education-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-education"
                      type="button"
                      role="tab"
                      aria-controls="pills-education"
                      aria-selected="false"
                    >
                      Education
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-skill"
                    role="tabpanel"
                    aria-labelledby="pills-skill-tab"
                  >
                    <div className="single-progress">
                      <h6>HTML</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>CSS</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>JAVASCRIPT</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>JQUERY</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>BOOTSTRAP</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>PHP</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "78%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>tailwind css</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>Laravel</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "68%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>WordPress</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>Figma</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "79%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>MYSQL</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "82%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>C#</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>Asp.net (MVC)</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>Sql server</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                    <div className="single-progress">
                      <h6>Photoshop</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "59%" }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    {/* Add other skill entries similarly */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-experience"
                    role="tabpanel"
                    aria-labelledby="pills-experience-tab"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        <a href="#">
                          Full Stack Developer<span>-2023 Current </span>
                        </a>
                      </li>
                      {/* Add other experience entries similarly */}
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-education"
                    role="tabpanel"
                    aria-labelledby="pills-education-tab"
                  >
                    <ul className="text-start ps-0">
                      <li>
                        <a href="#">Matriculation in Science from BSEK</a>
                      </li>
                      <li>
                        <a href="#">
                          Intermediate in Commerce BSEK and further studies in
                          bachelors
                        </a>
                      </li>
                      {/* Add other education entries similarly */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
