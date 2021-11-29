import React from "react";

const AllSaasSolutions = () => {
  return (
    <main>
      <div class="services-area  mt-3 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center">
                <span className="border-left-1"></span>
                <span> Saas Solutions</span>
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
              <h5>Software as a service (or SaaS)</h5>
              <p>
                Software as a service (or SaaS) is a way of delivering
                applications over the Internet—as a service. Instead of
                installing and maintaining software, you simply access it via
                the Internet, freeing yourself from complex software and
                hardware management. SaaS applications are sometimes called
                Web-based software, on-demand software, or hosted software.
                Whatever the name, SaaS applications run on a SaaS provider’s
                servers. The provider manages access to the application,
                including security, availability, and performance.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/resources/saas-solutions.jpg"
                className="w-100"
                alt="saas-solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllSaasSolutions;
