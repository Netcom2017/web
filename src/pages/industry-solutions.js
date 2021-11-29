import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AllIndustrySolutions from "../components/AllIndustrySolutions/all-industry-solutions";

class IndustrySolutions extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb pageTitle="Website Development" />
          {/* breadcrumb-area-start */}
          {/* About Main */}
          <AllIndustrySolutions />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default IndustrySolutions;
