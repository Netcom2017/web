import React from "react";

const AllSoftwareSolutions = () => {
  return (
    <main>
      <div class="services-area  mt-3 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center">
                <span className="border-left-1"></span>
                <span> Software Solutions</span>
                <span className="border-right-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row box software-solution mb-4">
            <div className="col-md-6">
              <h5>Software Solutions</h5>
              <p>Description</p>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/resources/software-solutions.jpg"
                className="w-100"
                alt="software-solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllSoftwareSolutions;
