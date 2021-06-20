import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const BurgerMenus = ({ setMenuOpen, menuOpen }) => {
  const [home, setHome] = useState(false);
  const [service, setService] = useState(false);
  const [blog, setBlog] = useState(false);
  const [pages, setPages] = useState(false);

  const router = useRouter();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(router.pathname);
  }, [router]);

  const openMobileMenu = (menu) => {
    if (menu == "home") {
      setHome(!home);
      setService(false);
      setBlog(false);
      setPages(false);
    } else if (menu == "service") {
      setHome(false);
      setService(!service);
      setBlog(false);
      setPages(false);
    } else if (menu == "blog") {
      setHome(false);
      setService(false);
      setBlog(!blog);
      setPages(false);
    } else if (menu == "pages") {
      setHome(false);
      setService(false);
      setBlog(false);
      setPages(!pages);
    }
  };

  return (
    <div className={menuOpen ? "side-mobile-menu open" : "side-mobile-menu"}>
      <div className="close-mobile-menu" onClick={() => setMenuOpen(false)}>
        <a>
          <i>
            <FontAwesomeIcon icon={["far", "times"]} />
          </i>
        </a>
      </div>
      <div className="mm-menu">
        <ul>
          <li>
            <Link href="/about" as="/about">
              <a>Who We Are</a>
            </Link>
          </li>
          <li className={service ? "has-droupdown active" : "has-droupdown"}>
            <a
              onClick={() => {
                openMobileMenu("service");
              }}
            >
              Our Services
            </a>
            <ul className={service ? "sub-menu active" : "sub-menu"}>
              <li>
                <Link href="/website-development" as="/website-development">
                  <a>Website Development</a>
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-solutions" as="/ecommerce-solutions">
                  <a>E-Commerce Solutions</a>
                </Link>
              </li>
              <li>
                <Link
                  href="/applications-development"
                  as="/applications-development"
                >
                  <a>Applications Development</a>
                </Link>
              </li>
              <li>
                <Link href="/digital-marketing" as="/digital-marketing">
                  <a>Digital Marketing</a>
                </Link>
              </li>
              <li>
                <Link href="/ui-ux-designing" as="/ui-ux-designing">
                  <a>UI/UX Designing</a>
                </Link>
              </li>
              <li>
                <Link href="/other-services" as="/other-services">
                  <a>Other Services</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className={pages ? "has-droupdown active" : "has-droupdown"}>
            <a
              onClick={() => {
                openMobileMenu("pages");
              }}
            >
              Our Solutions
            </a>
            <ul className={pages ? "sub-menu active" : "sub-menu"}>
              <li>
                <Link href="/industry-solutions" as="/industry-solutions">
                  <a>Industry Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/integrated-solutions" as="/integrated-solutions">
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
                <Link href="/software-solutions" as="/software-solutions">
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
          <li>
            <Link href="/career" as="/career">
              <a>Career</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
        <div className="header-button-btn d-lg-none">
          <a className="btn" href="/contact" as="/contact">
            <span className="btn-text">
              Request A Demo{" "}
              <i>
                <FontAwesomeIcon icon={["fas", "long-arrow-right"]} />
              </i>
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenus;
