import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Service = () => {
  return (
    <div
      className="services-area pt-120 pb-100"
      style={{ "background-image": "url(assets/img/bg/bg-1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
            <div className="section-title text-center ml-50 mr-50 mb-80">
              <span className="border-left-1"></span>
              <span>Our Services</span>
              <span className="border-right-1"></span>
              <h1>We providing exclusive services for your business</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/icon/icon-01.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Web Development</h3>
                <div className="services-text-button">
                  <Link href="/website-development" as="/website-development">
                    <span className="services-button">
                      read more
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/icon/icon-2.png" alt="" />
              </div>
              <div className="services-text">
                <h3>E-Commerce Solutions</h3>
                <div className="services-text-button">
                  <Link href="/ecommerce-solutions" as="/ecommerce-solutions">
                    <span className="services-button">
                      read more
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/icon/icon-3.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Mobile App Development</h3>
                <div className="services-text-button">
                  <Link
                    href="/applications-development"
                    as="/applications-development"
                  >
                    <span className="services-button">
                      read more
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/icon/icon-6.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Digital Marketing</h3>
                <div className="services-text-button">
                  <Link href="/digital-marketing" as="/digital-marketing">
                    <span className="services-button">
                      read more
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/icon/icon-4.png" alt="" />
              </div>
              <div className="services-text">
                <h3>UX/UI Strategy</h3>
                <div className="services-text-button">
                  <Link href="/ui-ux-designing" as="/ui-ux-designing">
                    <span className="services-button">
                      read more
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/icon/icon-5.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Other Services</h3>
                <div className="services-text-button">
                  <Link href="/other-services" as="/other-services">
                    <span className="services-button">
                      read more
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
