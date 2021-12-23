import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="about-area">
      <div className="container">
        <div className="row text-center">
          <div className="col-xl-12 col-lg-12 mb-30">
            <div className="about-text">
              <span>who we are</span>
              <h1>
                We are providing IT and Digital Marketing Solutionss
                <span> for more than 5 years</span>
              </h1>
              <h2>Proactive & Effective Marketing Solutions</h2>
              <h3>For Small-To-Medium Sized Businesses</h3>
              <p>
                NetCom Business Solutions Private Limited is recognised as the
                Top Digital Marketing Company in Pune. We focus on fostering the
                areas like Web Design & Development, SEO, SMM, Digital Marketing
                Services, Web Advertisements, and Developing Creative Content
                resulting in Fully Managed and Highly Successful Online
                Marketing Campaigns. We aim to provide the best possible
                Strategic Outcome for our valuable clients through our
                Affordable Digital Marketing Services under one roof. At Netcom
                Business Solutions, we have onboard Dynamic Professionals and
                the Best Digital Marketers, helping us to create Powerful Brand
                Experiences for our Clients. Business Owners belonging to
                different Industries, in need of Business Growth and Marketing
                needs, resort to us for the best Business Plans. From{" "}
                <Link href="/website-development" as="/website-development">
                  Web Design and development
                </Link>{" "}
                to{" "}
                <Link href="/digital-marketing" as="/digital-marketing">
                  Search Engine Optimization
                </Link>
                ,{" "}
                <Link href="/digital-marketing" as="/digital-marketing">
                  Social Media Optimization
                </Link>
                , and{" "}
                <Link href="/digital-marketing" as="/digital-marketing">
                  Social Media Marketing
                </Link>
                , we, as Among the Top digital marketing companies in pune,
                leave no stone unturned to let your business be armed with a
                distinctive tag.
              </p>
              <Link href="/about" as="/about">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
