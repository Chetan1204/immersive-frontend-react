import React, { JSX, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Define Types for Technology
interface Technology {
  name: string;
  icon: JSX.Element;
}

// Define Types for Tabs
interface Tab {
  id: number;
  name: string;
  icon: JSX.Element;
  technologies: Technology[];
}

const DigitalTransformation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs: Tab[] = [
    {
      id: 1,
      name: "Frontend Programming Languages",
      icon: (
        <img
          src="assets/images/icon/frontend-programming-languages.svg"
          alt=""
        />
      ),
      technologies: [
        {
          name: "CSS",
          icon: <img src="assets/images/icon/css-logo.svg" alt="" />,
        },
        {
          name: "HTML",
          icon: <img src="assets/images/icon/html-logo.svg" alt="" />,
        },
        {
          name: "JavaScript",
          icon: <img src="assets/images/icon/javascript-logo.svg" alt="" />,
        },
        {
          name: "Angular",
          icon: <img src="assets/images/icon/ng-logo.svg" alt="" />,
        },
        {
          name: "React",
          icon: <img src="assets/images/icon/react-logo.svg" alt="" />,
        },
        {
          name: "Vue.Js",
          icon: <img src="assets/images/icon/vuejs-logo.svg" alt="" />,
        },
        {
          name: "Meteor",
          icon: <img src="assets/images/icon/meteor.svg" alt="" />,
        },
        {
          name: "Next.Js",
          icon: <img src="assets/images/icon/nextlogo.svg" alt="" />,
        },
        {
          name: "TypeScript",
          icon: <img src="assets/images/icon/typescript.svg" alt="" />,
        },
        {
          name: "Bootstrap",
          icon: <img src="assets/images/icon/bootstrap.svg" alt="" />,
        },
      ],
    },
    {
      id: 2,
      name: "Backend Programming Languages",
      icon: (
        <img
          src="assets/images/icon/backend-programming-languages.svg"
          alt=""
        />
      ),
      technologies: [
        {
          name: "Node.js",
          icon: <img src="assets/images/icon/backend-icon/nodejs.svg" alt="" />,
        },
        {
          name: "PHP",
          icon: (
            <img src="assets/images/icon/backend-icon/php-logo.svg" alt="" />
          ),
        },
        {
          name: "Python",
          icon: <img src="assets/images/icon/backend-icon/python.svg" alt="" />,
        },
        {
          name: "Java",
          icon: <img src="assets/images/icon/backend-icon/java.svg" alt="" />,
        },
        {
          name: ".NET",
          icon: <img src="assets/images/icon/backend-icon/dot-net.svg" alt="" />,
        },
      ],
    },
    {
      id: 3,
      name: "Mobile App Development",
      icon: <img src="assets/images/icon/mobile-icon.svg" alt="" />,
      technologies: [
        {
          name: "React Native",
          icon: <img src="assets/images/icon/mobile-react.svg" alt="" />,
        },
        {
          name: "Android",
          icon: <img src="assets/images/icon/mobile-android.svg" alt="" />,
        },
        {
          name: "Flutter",
          icon: <img src="assets/images/icon/mobile-futter.svg" alt="" />,
        },
        {
          name: "Xamarin",
          icon: <img src="assets/images/icon/mobile-xamarin.svg" alt="" />,
        },
        {
          name: "iOS",
          icon: <img src="assets/images/icon/mobile-ios.svg" alt="" />,
        },
      ],
    },
    {
      id: 4,
      name: "Databases / Data Storages",
      icon: <img src="assets/images/icon/big-data-icon-home.svg" alt="" />,
      technologies: [
        {
          name: "Mongo DB",
          icon: <img src="assets/images/icon/mongodb-tech.svg" alt="" />,
        },
        {
          name: "MySQL",
          icon: <img src="assets/images/icon/mysql-tech.svg" alt="" />,
        },
        {
          name: "APACHE HBASE",
          icon: <img src="assets/images/icon/hbase-tech.svg" alt="" />,
        },
        {
          name: "HIVE",
          icon: <img src="assets/images/icon/hive-tech.svg" alt="" />,
        },
        {
          name: "Microsoft SQL Server",
          icon: <img src="assets/images/icon/ms-sql-server.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/oracle-tech.svg" alt="" />,
        },
      ],
    },
    {
      id: 5,
      name: "Cloud DB, Warehouses & Storage",
      icon: (
        <img
          src="assets/images/icon/architecture-designs-and-patterns.svg"
          alt=""
        />
      ),
      technologies: [
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/amazon-documentdb.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/google-cloud-sql.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/google-cloud-datastore.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/azure-synapse-analytics.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/azure-sql-database.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/azure-data-lake.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/azure-cosmos-DB.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/azure-blob-storage.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/aws-elasticache.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/amazon-redshift.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/amazon-rds.svg" alt="" />,
        },
        {
          name: "ORACLE",
          icon: <img src="assets/images/icon/amazon-dynamodb.svg" alt="" />,
        },
      ],
    },
    {
      id: 6,
      name: "DevOps",
      icon: <img src="assets/images/icon/devops-tech-icon.svg" alt="" />,
      technologies: [
        {
          name: "Ansible",
          icon: <img src="assets/images/icon/ansible.svg" alt="" />,
        },
        {
          name: "Chef",
          icon: <img src="assets/images/icon/chef-logo.svg" alt="" />,
        },
        {
          name: "Docker",
          icon: <img src="assets/images/icon/docker-logo.svg" alt="" />,
        },
        {
          name: "Google Developer Tools",
          icon: <img src="assets/images/icon/google-developer-tools.svg" alt="" />,
        },
        {
          name: "Kubernetes",
          icon: <img src="assets/images/icon/kubernetes.svg" alt="" />,
        },
        {
          name: "Apache Mesos",
          icon: <img src="assets/images/icon/mesos-logo.svg" alt="" />,
        },
        {
          name: "Openshift",
          icon: <img src="assets/images/icon/openshift-logo.svg" alt="" />,
        },
        {
          name: "Packer",
          icon: <img src="assets/images/icon/packer-tech-icon.svg" alt="" />,
        },
        {
          name: "Puppet",
          icon: <img src="assets/images/icon/puppet-logo.svg" alt="" />,
        },
        {
          name: "Teraaform",
          icon: <img src="assets/images/icon/terraform-tech-icon.svg" alt="" />,
        },
      ],
    },
    {
      id: 7,
      name: "AI & Automation",
      icon: (
        <img
          src="assets/images/icon/artificial-intelligence-icon-home.svg"
          alt=""
        />
      ),
      technologies: [],
    },
  ];

  return (
    <div className="py-5 digital-transformation">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="mb-5 wow animate__animated animate__fadeInLeft" data-wow-delay="0.5s">
              <h1>
                Tech Capabilities Driving Digital Transformation For Our Clients
              </h1>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col lg={6} md={6} sm={12}>
            <ul className="side-menu wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s">
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  className={`menu-item ${activeTab === i ? "active" : ""} wow animate__animated animate__fadeInLeft`} data-wow-delay="0.6s"
                  onClick={() => setActiveTab(i)}
                >
                  <span className="menu-icon">{tab.icon}</span>
                  {tab.name}
                  {activeTab === i && <span className="menu-arrow">▶</span>}
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="technology-box">
              {tabs[activeTab].technologies.length > 0 ? (
                <div className="tech-grid ">
                  {tabs[activeTab].technologies.map((tech, i) => (
                    <div key={i} className="tech-item wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">
                      <span className="tech-icon">{tech.icon}</span>
                      {tech.name}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-tech">
                  No technologies listed for this category.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DigitalTransformation;
