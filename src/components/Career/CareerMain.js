import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Career extends Component {
  render() {
    return (
      <main>
        <section className="career-cat-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center ml-50 mr-50 mb-75">
                  <span className="border-left-1"></span>
                  <span>Job category</span>
                  <span className="border-right-1"></span>
                  <p>
                    We have some excellent career for aspiring individuals who
                    think that they have got the potential and skills that can
                    be combined to bombard the ongoing revolution in the IT
                    industry and across the digital marketing sector.
                  </p>
                  Mail Us:-{" "}
                  <a href="mailto:sales@netcom-india.com">
                    sales@netcom-india.com
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/01.png" alt="" />
                  <h3>It Solutions</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/02.png" alt="" />
                  <h3>It Consulting</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/03.png" alt="" />
                  <h3>Product Design</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/04.png" alt="" />
                  <h3>Server Security</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/05.png" alt="" />
                  <h3>It Management</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/06.png" alt="" />
                  <h3>UX/UI Strategy</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/07.png" alt="" />
                  <h3>IT Marketing</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4">
                <div className="carrer-cat text-center mb-30">
                  <img src="assets/img/carrer/08.png" alt="" />
                  <h3>Bank & Finance</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Career;
