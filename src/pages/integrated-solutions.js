import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AllIntegratedSolutions from "../components/AllIntegratedSolutions/all-integrated-solutions";

class IntegratedSolutions extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb pageTitle="Website Development" />
          {/* breadcrumb-area-start */}
          {/* About Main */}
          <AllIntegratedSolutions />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default IntegratedSolutions;
