import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AllEcommerce extends Component {
  render() {
    return (
      <main>
        <div class="services-area  mt-3 mb-4">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center">
                  <span className="border-left-1"></span>
                  <span> E-Commerce Solutions</span>
                  <span className="border-right-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row box saas-solution mb-4">
              <div className="col-md-6">
                <p>
                  Our experts are skilled with developing first e-commerce store
                  or modifying an existing website for our clients. We will help
                  you set up your online media to draw more clients.
                </p>
                <p>
                  Create new opportunities for your industry or business &
                  provide your customers with personalized shopping experience
                  with Netcom Business solutions Pvt. Ltd. We offer a full-suite
                  of ecommerce development services including strategy,
                  integration, development, migration and marketing. We are also
                  providing ecommerce store maintenance and support service for
                  keeping it available 24x7. Our delivered ecommerce solution is
                  full-featured, robust, secure & highly efficient which can
                  meet the needs of any size entity! We have expertise in Food &
                  healthcare, manufacturing industries, Sports & Fitness!
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="assets/img/service/ecommerce.jpg"
                  className="w-100"
                  alt="ecommerce"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  We can also support you with various digital marketing
                  strategy for your ecommerce store, which includes how to
                  improve your customer experience, customer engagement,
                  retention, revenue, sales; how to simplify and streamline
                  in-store processes, how to reduce abandoned shopping carts to
                  boost the overall sales, how to deal with supply chain
                  disruptions, move your customers offline to online and many
                  more!
                </p>
                <p>
                  Whether you require a brand new ecommerce website or want to
                  redesign or revamp your existing ecommerce website or online
                  store, our team of ecommerce experts can deliver end to end
                  ecommerce solution from planning, design, development and
                  marketing services!
                </p>
              </div>
            </div>
          </div>
          <div className="container elements">
            <h4 className="text-center">
              Elements we offer in Ecommerce Website
            </h4>
            <div className="row text-center mt-4">
              <div className="col-md-4">
                <div className="elements-box">
                  <img
                    src="assets/img/service/custom-web-design.png"
                    alt="custom-web-design"
                  />
                  <h5>Custom Web Design</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="elements-box">
                  <img
                    src="assets/img/service/cart-development.png"
                    alt="cart-development"
                  />
                  <h5>Cart Development</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="elements-box">
                  <img
                    src="assets/img/service/responsive-website.png"
                    alt="responsive-website"
                  />
                  <h5>Responsive Website</h5>
                </div>
              </div>
            </div>
            <div className="row text-center mt-4">
              <div className="col-md-4">
                <div className="elements-box">
                  <img
                    src="assets/img/service/plugin-development.png"
                    alt="plugin-development"
                  />
                  <h5>Plug-in Development</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="elements-box">
                  <img
                    src="assets/img/service/regularcustomization.png"
                    alt="regularcustomization"
                  />
                  <h5>Regular Customization</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="elements-box">
                  <img
                    src="assets/img/service/payment-gateway-integration.png"
                    alt="payment-gateway-integration"
                  />
                  <h5>Payment Gateway Integration</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AllEcommerce;
