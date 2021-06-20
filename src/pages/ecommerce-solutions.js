import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AllEcommerce from "../components/Ecommerce/AllEcommerce";

class CrmSolutions extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          {/* breadcrumb-area-start */}
          <SiteBreadcrumb pageTitle="Website Development" />
          {/* breadcrumb-area-start */}
          {/* About Main */}
          <AllEcommerce />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CrmSolutions;
