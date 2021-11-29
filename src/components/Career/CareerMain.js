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
                <a className="text-dark" href="mailto:sales@netcom-india.com">
                  sales@netcom-india.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Career;
