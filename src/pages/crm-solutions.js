import React, { Component } from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import SiteBreadcrumb from "../components/Common/Breadcumb";
import AllCRMSolutions from "../components/AllCrmSolutions/all-crm-solutions";

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
          <AllCRMSolutions />
          {/* About Main */}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default CrmSolutions;
