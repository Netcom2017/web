import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Career extends Component {
  render() {
    return (
      <main>
        <div class="services-area  mt-3 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center">
                  <span className="border-left-1"></span>
                  <span> Careers</span>
                  <span className="border-right-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row text-center mb-4">
              <div className="col-md-12">
                <p>
                  We have some excllent careers for aspiring individuals who
                  think that they have got the potential and skills that can be
                  combined to bombard the ongoing revolution in the IT industry
                  and across the digital marketing sector.
                </p>
                Mail Us:-{" "}
                <a href="mailto:sales@netcom-india.com">
                  sales@netcom-india.com
                </a>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-xl-12">
                <div className="appointment-wrapper contact-form-page">
                  <form
                    className="appointment-form"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                  >
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-30">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-30">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-30">
                          <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-30">
                          <input
                            type="text"
                            id="qualification"
                            name="qualification"
                            placeholder="Qualification"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-30">
                          <select
                            class="form-control"
                            id="position[]"
                            name="position[]"
                          >
                            <option value="Position">Position</option>
                            <option value="Website Development">
                              Website Development
                            </option>
                            <option value="Wordpress Development">
                              Wordpress Development
                            </option>
                            <option value="PHP Development">
                              PHP Development
                            </option>
                            <option value="Digital Marketing">
                              Digital Marketing
                            </option>
                            <option value="SEO">
                              SEO (Search Engine Optimization)
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-30">
                          <input type="file" name="resume" id="resume" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-30">
                          <textarea
                            id="message"
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Profile Summery"
                          ></textarea>
                        </div>
                        <div className="contact-btn contact-2-btn text-center">
                          <button className="btn" type="submit" value="submit">
                            <span className="btn-text">
                              Send Resume
                              <i>
                                <FontAwesomeIcon
                                  icon={["fas", "long-arrow-right"]}
                                />
                              </i>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Career;
