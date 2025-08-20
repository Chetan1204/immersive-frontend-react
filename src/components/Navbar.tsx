import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownShow, setDropdownShow] = useState(false);
  const [isDropdownInsights, setDropdownInsights] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const [isSticky, setIsSticky] = useState(false);
  const [showSideModal, setShowSideModal] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [activeSection, setActiveSection] = useState("Impact");
  const handleCloseSideModal = () => setShowSideModal(false);
  const handleShowSideModal = () => setShowSideModal(true);

  // Sticky Navbar Effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <div className="gsap-height"></div> */}
      {/* <div className="text-white py-2">
        <div className="container d-flex justify-content-end align-items-center gap-3">
          <span>
            <Link to="tel:+918889800028" className="text-white">
              Sales: +91 8889800028
            </Link>
          </span>
          <button
            onClick={toggleTheme}
            type="button"
            className={`btn btn-toggle ${theme === "dark" ? "active" : ""}`}
            aria-pressed={theme === "dark"}
          >
            <div className="icon-container">
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faMoon} style={{ fontSize: "20px" }} />
              ) : (
                <FontAwesomeIcon
                  icon={faLightbulb}
                  style={{ color: "#FFD43B", fontSize: "20px" }}
                />
              )}
            </div>
          </button>
        </div>
      </div> */}

      {/* <header className={`header ${isSticky ? "sticky" : ""}`}> */}
      <header className={`header sticky`}>
        <div className="top-header text-white py-2">
        <div className="container d-flex justify-content-end align-items-center gap-3">
          <span>
            <Link to="tel:+918889800028" className="text-white">
              Sales: +91 8889800028
            </Link>
          </span>
          <button
            onClick={toggleTheme}
            type="button"
            className={`btn btn-toggle ${theme === "dark" ? "active" : ""}`}
            aria-pressed={theme === "dark"}
          >
            <div className="icon-container">
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faMoon} style={{ fontSize: "20px" }} />
              ) : (
                <FontAwesomeIcon
                  icon={faLightbulb}
                  style={{ color: "#FFD43B", fontSize: "20px" }}
                />
              )}
            </div>
          </button>
        </div>
      </div>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="header-left d-flex align-items-center">
              <Link to="/" className="logo-link">
                <img
                  src={
                    theme === "light"
                      ? "/logo-dark-new.svg"
                      : "/logo-white-new.svg"
                  }
                  alt="Logo"
                  className="logo"
                />
              </Link>

              <button
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>

            <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
              <button
                className="mobile-close-btn d-lg-none"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <Link to="/what-we-do" className="nav-link">
                What We Do
              </Link>

              <div className="nav-item dropdown-wrapper">
                <button
                  className="nav-link"
                  onClick={() => setDropdownShow(!isDropdownShow)}
                  onMouseEnter={() => setDropdownShow(true)}
                  aria-expanded={isDropdownShow}
                >
                  Services
                  <svg
                    className="ms-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d={isDropdownShow ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
                    />
                  </svg>
                </button>

                {isDropdownShow && (
                  <div
                    className="nav-dropdown"
                    onMouseLeave={() => setDropdownShow(false)}
                  >
                    <div className="dropdown-content">
                      <Col lg={7} className="dropdown-text">
                        <h3>Browse by Services</h3>
                        <Row className="industries-grid">
                          <Col lg={4}>
                            <ul>
                              <li>
                                <Link to="/mobile-app-development">
                                  Mobile App Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/web-app-development">
                                  Web App Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/blockchain-development">
                                  Blockchain Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/ui-ux-development">
                                  UI/UX Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/ecommerce-development">
                                  E-commerce Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/wordpress-development">
                                  WordPress Development
                                </Link>
                              </li>
                            </ul>
                          </Col>
                          <Col lg={4}>
                            <ul>
                              <li>
                                <Link to="/digital-marketing">
                                  Digital Marketing
                                </Link>
                              </li>
                              <li>
                                <Link to="/quality-assurance-testing">
                                  Quality Assurance
                                </Link>
                              </li>
                              <li>
                                <Link to="/full-stack-development">
                                  Full Stack Development
                                </Link>
                              </li>
                              <li>
                                <Link to="/hire-dedicated-developers">
                                  Hire Dedicated Developers
                                </Link>
                              </li>
                              <li>
                                <Link to="/staff-augmentation">
                                  Staff Augmentation
                                </Link>
                              </li>
                            </ul>
                          </Col>
                          <Col lg={8}>
                            <p className="header-desc mt-4">
                              Crafting roadmaps to digital maturity across
                              diverse industries and segments
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={5} className="dropdown-image">
                        <img
                          src="assets/images/portfolio-new.png"
                          alt="Industries"
                        />
                      </Col>
                    </div>
                  </div>
                )}
              </div>

              <div className="nav-item dropdown-wrapper">
                <button
                  className="nav-link"
                  onClick={() => setDropdownInsights(!isDropdownInsights)}
                  onMouseEnter={() => setDropdownInsights(true)}
                  aria-expanded={isDropdownInsights}
                >
                  Industries
                  <svg
                    className="ms-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d={
                        isDropdownInsights ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"
                      }
                    />
                  </svg>
                </button>

                {isDropdownInsights && (
                  <div
                    className="nav-dropdown"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="dropdown-content">
                      <Col lg={8} className="dropdown-text">
                        <h3>Browse by Industries</h3>
                        <Row className="industries-grid">
                          <Col lg={4}>
                            <ul>
                              <li>
                                <Link to="/ecommerce">E-commerce & Retail</Link>
                              </li>
                              <li>
                                <Link to="/finance">Financial Services</Link>
                              </li>
                              <li>
                                <Link to="/professional">
                                  Professional Services
                                </Link>
                              </li>
                              <li>
                                <Link to="/healthcare">Healthcare</Link>
                              </li>
                              <li>
                                <Link to="/logistics">
                                  Logistics & Supply Chain
                                </Link>
                              </li>
                              <li>
                                <Link to="/manufacturing">Manufacturing</Link>
                              </li>
                            </ul>
                          </Col>
                          <Col lg={4}>
                            <ul>
                              <li>
                                <Link to="/sports">Sports</Link>
                              </li>
                              <li>
                                <Link to="/hospitality">
                                  Travel & Hospitality
                                </Link>
                              </li>
                              <li>
                                <Link to="/real-estate">Real Estate</Link>
                              </li>
                              <li>
                                <Link to="/telecom">Telecom</Link>
                              </li>
                              <li>
                                <Link to="/education">
                                  Education & Learning
                                </Link>
                              </li>
                              <li>
                                <Link to="/media">Media & Entertainment</Link>
                              </li>
                            </ul>
                          </Col>
                          <Col lg={8}>
                            <p className="header-desc mt-4">
                              Crafting roadmaps to digital maturity across
                              diverse industries and segments
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} className="dropdown-image">
                        <img
                          src="assets/images/portfolio-new.png"
                          alt="Industries"
                        />
                      </Col>
                    </div>
                  </div>
                )}
              </div>

              <div className="nav-item dropdown-wrapper">
                <button
                  className="nav-link"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  aria-expanded={isDropdownOpen}
                >
                  Insights
                  <svg
                    className="ms-2"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d={isDropdownOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"}
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    className="nav-dropdown"
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="dropdown-content">
                      <Col lg={8} className="dropdown-text">
                        <h3>Browse by Industries</h3>
                        <Row className="industries-grid">
                          <Col lg={4}>
                            <ul>
                              <li>
                                <Link to="/ecommerce">E-commerce & Retail</Link>
                              </li>
                              <li>
                                <Link to="/finance">Financial Services</Link>
                              </li>
                              <li>
                                <Link to="/professional">
                                  Professional Services
                                </Link>
                              </li>
                              <li>
                                <Link to="/healthcare">Healthcare</Link>
                              </li>
                              <li>
                                <Link to="/logistics">
                                  Logistics & Supply Chain
                                </Link>
                              </li>
                              <li>
                                <Link to="/manufacturing">Manufacturing</Link>
                              </li>
                            </ul>
                          </Col>
                          <Col lg={4}>
                            <ul>
                              <li>
                                <Link to="/sports">Sports</Link>
                              </li>
                              <li>
                                <Link to="/hospitality">
                                  Travel & Hospitality
                                </Link>
                              </li>
                              <li>
                                <Link to="/real-estate">Real Estate</Link>
                              </li>
                              <li>
                                <Link to="/telecom">Telecom</Link>
                              </li>
                              <li>
                                <Link to="/education">
                                  Education & Learning
                                </Link>
                              </li>
                              <li>
                                <Link to="/media">Media & Entertainment</Link>
                              </li>
                            </ul>
                          </Col>
                          <Col lg={8}>
                            <p className="header-desc mt-4">
                              Crafting roadmaps to digital maturity across
                              diverse industries and segments
                            </p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={4} className="dropdown-image">
                        <img
                          src="assets/images/portfolio-new.png"
                          alt="Industries"
                        />
                      </Col>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/career" className="nav-link">
                Career
              </Link>
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>

              <button className="get-started-button mobile-only">
                Get Started
              </button>
            </nav>
            <div className="d-flex gap-4">
              <div className="d-flex align-items-center gap-3">
                <button
                  className={`get-started-button desktop-only ${
                    theme === "dark" ? "dark" : ""
                  }`}
                >
                  Get Started
                </button>
              </div>

              <div className="header_menu_icon__q1NWM">
                <div className="header_icon__SiAfw">
                  <button
                    className="h-100 headerOffcanvas_btn__Qt97P"
                    aria-label="menu button"
                    onClick={handleShowSideModal}
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side Modal */}
      <Offcanvas
        show={showSideModal}
        onHide={handleCloseSideModal}
        placement="end"
        className="side-modal"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className="overflow-y-hidden">
          <Container>
            <div className="side-modal-content">
              <div className="headerMegaMenuFull_gradient_01__UgUnj">
                <img src="assets/images/bg-gradient-1.webp" alt="" />
              </div>
              <div className="headerMegaMenuFull_gradient_02__0lO5s">
                <img src="assets/images/bg-gradient.webp" alt="" />
              </div>
              <Row>
                <Col lg={9}>
                  <div
                    id="Impact"
                    className={`section-content ${
                      activeSection === "Impact" ? "active" : ""
                    }`}
                  >
                    <div>
                      <h3>Our Impact</h3>
                      <p>
                        Every innovation that happens here is out of a quest to
                        get better at what we are already doing. We deliver
                        ideas that make a difference, create experiences that
                        transform lives and build ecosystems that foster
                        progress.
                      </p>
                    </div>

                    <div className="d-flex  gap-5">
                      <div>
                        <span>700+</span>
                        <p className="span-p">Projects launched successfully across the globe</p>
                      </div>
                      <div>
                        <span>700+</span>
                        <p className="span-p">Projects launched successfully across the globe</p>
                      </div>
                      <div>
                        <span>700+</span>
                        <p className="span-p">Projects launched successfully across the globe</p>
                      </div>
                    </div>

                     <Row className="mt-5">
                      <Col className="d-flex justify-content-center">
                        <button className="view-all-btn">
                          View all works <span style={{ marginLeft: '8px' }}>→</span>
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <div
                    id="Testimonials"
                    className={`section-content ${
                      activeSection === "Testimonials" ? "active" : ""
                    }`}
                  >
                    Testimonials Content
                  </div>
                  <div
                    id="Clients"
                    className={`section-content ${
                      activeSection === "Clients" ? "active" : ""
                    }`}
                  >
                    Clients Content
                  </div>
                  <div
                    id="Partnership"
                    className={`section-content ${
                      activeSection === "Partnership" ? "active" : ""
                    }`}
                  >
                    Partnership Content
                  </div>
                  <div
                    id="Contact"
                    className={`section-content ${
                      activeSection === "Contact" ? "active" : ""
                    }`}
                  >
                    Contact Content
                  </div>
                </Col>
                <Col lg={3}>
                  <ul className="side-nav-links">
                    <li
                      className={activeSection === "Impact" ? "active" : ""}
                      onMouseEnter={() => setActiveSection("Impact")}
                    >
                      <Link to={"#"}>Impact</Link>
                    </li>
                    <li
                      className={
                        activeSection === "Testimonials" ? "active" : ""
                      }
                      onMouseEnter={() => setActiveSection("Testimonials")}
                    >
                      <Link to={""}>Testimonials</Link>
                    </li>
                    <li
                      className={activeSection === "Clients" ? "active" : ""}
                      onMouseEnter={() => setActiveSection("Clients")}
                    >
                      <Link to={"#"}>Clients</Link>
                    </li>
                    <li
                      className={
                        activeSection === "Partnership" ? "active" : ""
                      }
                      onMouseEnter={() => setActiveSection("Partnership")}
                    >
                      <Link to={"#"}>Partnership</Link>
                    </li>
                    <li
                      className={activeSection === "Contact" ? "active" : ""}
                      onMouseEnter={() => setActiveSection("Contact")}
                    >
                      <Link to={"#"}>Contact</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
