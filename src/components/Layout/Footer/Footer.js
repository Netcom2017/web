import React from "react";
import FooterBottom from "./FooterBottom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="footer-area bg-dark pt-80 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-wrapper mb-30">
                <h4 className="footer-title">Follow Us</h4>
                <div className="social-media-icon">
                  <a href="https://www.facebook.com/netcombusinesssolutions/">
                    <img
                      src="assets/img/icon/facebook-logo.png"
                      alt="facebook-partner-logo"
                    />
                  </a>
                  <a href="">
                    <img
                      src="assets/img/icon/linkedin-logo.png"
                      alt="facebook-partner-logo"
                    />
                  </a>
                  <a href="https://www.instagram.com/netcomindia/">
                    <img
                      src="assets/img/icon/instagram-logo.png"
                      alt="facebook-partner-logo"
                    />
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918766550668">
                    <img
                      src="assets/img/icon/whatsapp-logo.png"
                      alt="facebook-partner-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-wrapper mb-30">
                <h4 className="footer-title">Business Partner</h4>
                <div className="partner">
                  <img
                    src="assets/img/logo/google-partner.png"
                    alt="google-partner-logo"
                  />
                  <img
                    src="assets/img/logo/facebook-partner.jpg"
                    alt="facebook-partner-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
