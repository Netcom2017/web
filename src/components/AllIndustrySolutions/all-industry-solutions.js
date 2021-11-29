import React from "react";

const AllIndustrySolution = () => {
  return (
    <main>
      <div class="services-area  mt-3 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center">
                <span className="border-left-1"></span>
                <span>Industry Solutions</span>
                <span className="border-right-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row industry-solutions mb-4">
            <div className="col-md-7">
              <h5>Manufacturing</h5>
              <p>Description</p>
            </div>
            <div className="col-md-5">
              <img
                src="assets/img/resources/industry-solutions.jpg"
                className="w-100"
                alt="industry-solutions"
              />
            </div>
          </div>
          <div className="row box life-sciences mb-4">
            <div className="col-md-5">
              <img
                src="assets/img/resources/life-sciences.jpg"
                className="w-100"
                alt="life-sciences"
              />
            </div>
            <div className="col-md-7">
              <h5>Life Sciences</h5>
              <p>Description</p>
            </div>
          </div>
          <div className="row box real-estate mb-4">
            <div className="col-md-7">
              <h5>Real Estate</h5>
              <p>Description</p>
            </div>
            <div className="col-md-5">
              <img
                src="assets/img/resources/real-estate.jpg"
                className="w-100"
                alt="real-estate"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllIndustrySolution;
