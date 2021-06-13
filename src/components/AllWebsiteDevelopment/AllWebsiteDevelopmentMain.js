import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StaticWebsiteDevelopment from "./StaticWebsiteDevelopment";
import DynamicWebsiteDevelopment from "./DynamicWebsiteDevelopment";

class AllWebsiteDevelopmentMain extends Component {
  render() {
    return (
      <main>
        {/* <!-- website-development-start --> */}
        <div class="services-area mt-3 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
                <div className="section-title text-center">
                  <span className="border-left-1"></span>
                  <span>Website Development</span>
                  <span className="border-right-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container website-development">
          <div className="row static">
            <div className="col-md-12">
              <StaticWebsiteDevelopment />
            </div>
            <div className="col-md-12">
              <DynamicWebsiteDevelopment />
            </div>
          </div>
        </div>
        {/* <!-- website-development-end --> */}
      </main>
    );
  }
}

export default AllWebsiteDevelopmentMain;
