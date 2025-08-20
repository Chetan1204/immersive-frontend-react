import React from "react";
import { useState } from "react";
import { Container, Row, Col, Collapse } from "react-bootstrap";

const CurrentOpenings = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleCollapse = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="py-5 current-openings">
      <Container>
        <Row className="d-flex align-items-center text-center justify-content-center mx-auto">
          <Col lg={6} md={6} sm={12}>
            <h2 className="section-title">Current openings</h2>
            <p className="benefits-desc">
            We're always looking for talented people
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="wrapper wrapper-content animated fadeInRight">
              {/* Salesforce Developer */}
              <div className="faq-item border-bottom">
                <div className="row">
                  <div className="col-lg-8 col-sm-6">
                    <h1>iOS Developer</h1>
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <ul>
                          <li className="experience">Experience</li>
                          <li className="year">1 to 4 Years</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <ul>
                          <li className="positions">Positions</li>
                          <li className="pos">2</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 text-right d-flex justify-content-center align-items-center view-top-btn">
                    <button
                      className="faq-question me-4 btn-get-started-1"
                      onClick={() => toggleCollapse(0)}
                      aria-controls="faq1"
                      aria-expanded={openIndex === 0}
                    >
                      View Details
                    </button>
                    <a
                      href="#applyjob"
                      className="faq-question-1 btn-get-started"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <Collapse in={openIndex === 0}>
                  <div id="faq1">
                    <div className="faq-answer">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="content">
                            <h3>Key Responsibilities</h3>
                            <ul>
                              <li>
                                Designing and building mobile applications for
                                Apple’s iOS platform.
                              </li>
                              <li>
                                Collaborating with the design team to define app
                                features.
                              </li>
                              <li>
                                Ensuring quality and performance of the
                                application to specifications.
                              </li>
                              <li>
                                Identifying potential problems and resolving
                                application bottlenecks.
                              </li>
                              <li>
                                Fixing application bugs before the final
                                release.
                              </li>
                              <li>Publishing application on App Store.</li>
                              <li>
                                Maintaining the code and optimization of the
                                application.
                              </li>
                              <li>
                                Designing and implementing application updates.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="content">
                            <h3>Job Requirement</h3>
                            <ul>
                              <li>
                                Proven experience of minimum 2 years as an app
                                developer.
                              </li>
                              <li>
                                Proficient in Objective-C, Swift, and Cocoa
                                Touch.
                              </li>
                              <li>
                                Extensive experience with iOS Frameworks such as
                                Core Data and Core Animation.
                              </li>
                              <li>Knowledge of iOS back-end services.</li>
                              <li>
                                Knowledge of Apple’s design principles and
                                application interface guidelines.
                              </li>
                              <li>
                                Proficient in code versioning tools including
                                Mercurial, Git, and SVN.
                              </li>
                              <li>Knowledge of C-based libraries.</li>
                              <li>Experience with continuous integration.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="content-info">
                            <h2>APPLY NOW ON</h2>
                            <span>
                              <a href="mailto:hr@immersiveinfotech.com">
                                hr@immersiveinfotech.com
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>

              {/* iOS Developer */}
              <div className="faq-item">
                <div className="row">
                  <div className="col-lg-8 col-sm-6">
                    <h1>Business Development Executive</h1>
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <ul>
                          <li className="experience">Experience</li>
                          <li className="year">1 to 4 Years</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <ul>
                          <li className="positions">Positions</li>
                          <li className="pos">2</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 text-right d-flex justify-content-center align-items-center view-top-btn">
                    <button
                      className="faq-question me-4 btn-get-started-1"
                      onClick={() => toggleCollapse(1)}
                      aria-controls="faq2"
                      aria-expanded={openIndex === 1}
                    >
                      View Details
                    </button>
                    <a
                      href="#applyjob"
                      className="faq-question-1 btn-get-started"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                <Collapse in={openIndex === 1}>
                  <div id="faq2">
                    <div className="faq-answer">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="content">
                            <h3>Key Responsibilities</h3>
                            <ul>
                              <li>
                                Designing and building mobile applications for
                                Apple’s iOS platform.
                              </li>
                              <li>
                                Collaborating with the design team to define app
                                features.
                              </li>
                              <li>
                                Ensuring quality and performance of the
                                application to specifications.
                              </li>
                              <li>
                                Identifying potential problems and resolving
                                application bottlenecks.
                              </li>
                              <li>
                                Fixing application bugs before the final
                                release.
                              </li>
                              <li>Publishing application on App Store.</li>
                              <li>
                                Maintaining the code and optimization of the
                                application.
                              </li>
                              <li>
                                Designing and implementing application updates.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="content">
                            <h3>Job Requirement</h3>
                            <ul>
                              <li>
                                Proven experience of minimum 2 years as an app
                                developer.
                              </li>
                              <li>
                                Proficient in Objective-C, Swift, and Cocoa
                                Touch.
                              </li>
                              <li>
                                Extensive experience with iOS Frameworks such as
                                Core Data and Core Animation.
                              </li>
                              <li>Knowledge of iOS back-end services.</li>
                              <li>
                                Knowledge of Apple’s design principles and
                                application interface guidelines.
                              </li>
                              <li>
                                Proficient in code versioning tools including
                                Mercurial, Git, and SVN.
                              </li>
                              <li>Knowledge of C-based libraries.</li>
                              <li>Experience with continuous integration.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="content-info">
                            <h2>APPLY NOW ON</h2>
                            <span>
                              <a href="mailto:hr@immersiveinfotech.com">
                                hr@immersiveinfotech.com
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CurrentOpenings;
