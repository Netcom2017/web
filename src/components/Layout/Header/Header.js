import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import TopHeader from "./TopBar";
import BurgerMenus from "./BurgerMenus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  return (
    <React.Fragment>
      <Head>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>
      <header id="header-wrap">
        <TopHeader />
        <div id="sticky-header" className="main-menu-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
                <div className="logo">
                  <Link href="/" as="/">
                    <a>
                      <img
                        src="assets/img/logo/logo.png"
                        alt="netcom-business-solution-logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div
                id="right-header"
                className="col-xl-9 col-lg-9 col-md-6 col-4"
              >
                <div className="header-button f-right d-none d-lg-block">
                  <a className="btn" href="/contact" as="/contact">
                    <span className="btn-text">
                      Request A Demo{" "}
                      <i>
                        <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
                      </i>
                    </span>{" "}
                  </a>
                </div>
                <div className="main-menu text-right d-none d-lg-block">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <Link href="/about" as="/about">
                          <a>Who We Are</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/all-services" as="/all-services">
                          <a>Our Services</a>
                        </Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link
                              href="/website-development"
                              as="/website-development"
                            >
                              <a>Website Development</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/coming-soon" as="/coming-soon">
                              <a>E-Commerce Solutions</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/coming-soon" as="/coming-soon">
                              <a>Applications Development</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/coming-soon" as="/coming-soon">
                              <a>Digital Marketing</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/coming-soon" as="/coming-soon">
                              <a>UI/UX Designing</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/coming-soon" as="/coming-soon">
                              <a>Other Services</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          href="/industry-solutions"
                          as="/industry-solutions"
                        >
                          <a>Our Solutions</a>
                        </Link>
                        <ul className="sub-menu text-left">
                          <li>
                            <Link
                              href="/industry-solutions"
                              as="/industry-solutions"
                            >
                              <a>Industry Solutions</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/integrated-solutions"
                              as="/integrated-solutions"
                            >
                              <a>Integrated Solutions</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/crm-solutions" as="/crm-solutions">
                              <a>CRM Solutions</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/saas-solutions" as="/saas-solutions">
                              <a>SaaS Solutions</a>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/software-solutions"
                              as="/software-solutions"
                            >
                              <a>Software Solutions</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/case-studies" as="/case-studies">
                          <a>Case Studies</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="d-block d-xl-none d-lg-none text-right">
                  <div className="menu-bar">
                    <button
                      className="bars"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      <i>
                        {" "}
                        <FontAwesomeIcon icon={["far", "bars"]} />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div
          onClick={() => setMenuOpen(false)}
          className={menuOpen ? "body-overlay show" : "body-overlay"}
        ></div>
      </header>
    </React.Fragment>
  );
};

export default Header;
