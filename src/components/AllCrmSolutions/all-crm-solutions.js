import React from "react";

const AllCRMSolutions = () => {
  return (
    <main>
      <div class="services-area  mt-3 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 offset-lg-2 offset-xl-2">
              <div className="section-title text-center">
                <span className="border-left-1"></span>
                <span>CRM Solutions</span>
                <span className="border-right-1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row crm-solutions mb-4">
            <div className="col-md-6">
              <h5>CRM (Customer Relationship Management)</h5>
              <p>
                A CRM (Customer Relationship Management) system is a strategic
                tool that, companies across various industries, should leverage
                in order to better understand who their customers are and how
                they interact with the company.
              </p>
              <h6>CRM Integration?</h6>
              <p>
                As defined by Hubspot, a CRM integration is the seamless
                connectivity between your CRM software and third-party
                applications. These integrations result in automated actions
                that expand the functionality of your software, eliminating the
                need to toggle back and forth between systems.
              </p>
              <h6>Customer & Prospect Communications:-</h6>
              <ul>
                <li>
                  <strong>1. Customer Interactions:</strong> - Access, control,
                  and visibility as well as chronicling customer interactions
                  initiated by all types of communication channels (phone, web,
                  chat, email or social media).
                </li>
                <li>
                  <strong>2. Phone:</strong> - CRM integration with the phone
                  system, helps to record call details and contact information
                  in the CRM for future reference and visibility.{" "}
                </li>
                <li>
                  <strong>3. LiveChat/Chatbots:</strong> - Chat capability is
                  becoming more and more prominent. CRM integration with a chat
                  program or chat feature embedded on the corporate, sales
                  website or mobile application, enables chatbots to
                  automatically generate leads from website visitors or mobile
                  application users.
                </li>
                <li>
                  <strong>4. Email:</strong> - Enable the internal email client
                  UI from inside of the CRM application through integration with
                  the email system (i.e. Outlook or Gmail, etc.).
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="assets/img/resources/crm-solutions.jpg"
                className="w-100"
                alt="industry-solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AllCRMSolutions;
