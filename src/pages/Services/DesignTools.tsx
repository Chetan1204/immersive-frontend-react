import React from "react";
import { Col, Container, Row } from "react-bootstrap";

type ToolSection = {
    img: string;
  title: string;
  color: string;
  tools: string[];
};

const designSections: ToolSection[] = [
  {
    img: "assets/images/icon/ui-ux.svg",
    title: "UI/UX",
    color: "#d2bfff",
    tools: ["Sketch", "Adobe XD", "Photoshop", "Illustrator", "Figma"],
  },
  {
    img: "assets/images/icon/prototyping.svg",
    title: "Prototyping",
    color: "#fcb6cb",
    tools: ["Sketch", "Adobe XD", "Invision Studio", "Figma"],
  },
  {
    img: "assets/images/icon/grapp.svg",
    title: "Motion Graphics Animation",
    color: "#b5f4e3",
    tools: ["Adobe After Effects", "Adobe Premiere Pro"],
  },
  {
    img: "assets/images/icon/design.svg",
    title: "illustrator & Graphic Design",
    color: "#bcbcbc",
    tools: ["Sketch", "Photoshop", "Illustrator"],
  },
];

const DesignTools: React.FC = () => {
  return (
    <div className="design-tools py-5">
      <Container>
        <Row className="mb-4">
          <Col>
            <h2>
              Design Tools That Our Creative Designers Use Proficiently
            </h2>
            <p>
              Here’s a list of cutting-edge design tools used by our creative team to deliver state-of-the-art UI UX design services
            </p>
          </Col>
        </Row>

        {designSections.map((section, idx) => (
          <Row className="tool-card p-3 mb-3 rounded" key={idx}>
            <Col lg={3} className="d-flex align-items-center mb-3 mb-lg-0">
              <div className="icon-circle me-3" style={{ backgroundColor: section.color }}>
              <img src={section.img} alt={section.title} />
              </div>
              <h5 className="mb-0 tool-title">{section.title}</h5>
            </Col>
            <Col lg={9} className="d-flex flex-wrap gap-4 ps-3 ps-md-4 align-items-center">
              {section.tools.map((tool, i) => (
                <span className="tool-chip" key={i}>
                  <img src="assets/images/icon/check-circle.svg" alt="" /> {tool}
                </span>
              ))}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default DesignTools;
