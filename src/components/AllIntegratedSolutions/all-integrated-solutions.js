import React from "react";

const AllIntegratedSolutions = () => {
  return (
    <main>
      <div class="services-area  mt-3 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center">
                <span className="border-left-1"></span>
                <span> Integrated Solutions</span>
                <span className="border-right-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row box payment-integrations mb-4">
            <div className="col-md-6">
              <h5>Payment Gateway Integrations</h5>
              <p>
                The process of integrating a payment gateway may seem daunting,
                but if you want your website to accept online payments it is
                necessary. Payment gateways connect the merchant’s website and
                their payment processing bank, allowing for the secure
                transference of financial details. This is usually done by
                encrypting the details of credit cards, or other payment
                methods.
              </p>
              <p>There are list of payment gateway which we can integrate:-</p>
              <ul>
                <li>1. Razorpay Payment Gateway</li>
                <li>2. PayPal Payment Gateway</li>
                <li>3. PayKun Payment Gateway</li>
                <li>4. InstaMojo Payment Gateway</li>
                <li>5. Cashfree Payment Gateway</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/resources/payment-integrations.jpg"
                alt="payment-integrations"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllIntegratedSolutions;
