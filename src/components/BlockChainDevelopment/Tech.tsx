import React, { JSX, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import "./Desktop.css";

interface Technology {
  name: string;
  icon: JSX.Element;
}

interface Tab {
  id: number;
  name: string;
  icon: JSX.Element;
  technologies: Technology[];
}

const Tech: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

 const tabs: Tab[] = [
    {
      id: 1,
      name: "Advanced Technologies",
      icon: (
        <img
          src="assets/images/Blockchain/advanced-technologies-tools-icon.svg"
          alt=""
        />
      ),
      technologies: [
        {
          name: "Artificial Intelligence",
          icon: <img src="assets/images/Blockchain/Icons/Artificial-intelligence-ad-tech.svg" alt="" />,
        },
        {
          name: "Internet of Things",
          icon: <img src="assets/images/Blockchain/Icons/iot-ad-tech.svg" alt="" />,
        },
        {
          name: "Cloud",
          icon: <img src="assets/images/Blockchain/Icons/cloud-ad-tech.svg" alt="" />,
        },
        {
          name: "Data Analytics",
          icon: <img src="assets/images/Blockchain/Icons/Data-analytics-ad-tech.svg" alt="" />,
        },
        {
          name: "Metaverse",
          icon: <img src="assets/images/Blockchain/Icons/Metaverse-ad-tech.svg" alt="" />,
        },
       
        
      ],
    },
    {
      id: 2,
      name: "Blockchain Frameworks and Networks",
      icon: (
        <img
          src="assets/images/Blockchain/llm-frameworks-icon.svg"
          alt=""
        />
      ),
      technologies: [
        {
          name: "Avalanche",
          icon: <img src="assets/images/Blockchain/Icons/avalanche.svg" alt="" />,
        },
        {
          name: "Bitcoin",
          icon: (
            <img src="assets/images/Blockchain/Icons/bitcoin.svg" alt="" />
          ),
        },
        {
          name: "EOS",
          icon: <img src="assets/images/Blockchain/Icons/eos.svg" alt="" />,
        },
        {
          name: "Fantom",
          icon: <img src="assets/images/Blockchain/Icons/fantom.svg" alt="" />,
        },
        {
          name: "Tezos",
          icon: <img src="assets/images/Blockchain/Icons/tezos.svg" alt="" />,
        },

       {
          name: "Graphene",
          icon: <img src="assets/images/Blockchain/Icons/graphene.svg" alt="" />,
        },
        {
          name: "Hyperledger Fabric",
          icon: <img src="assets/images/Blockchain/Icons/hyperledger-febric.svg" alt="" />,
        },
        {
          name: "Near",
          icon: <img src="assets/images/Blockchain/Icons/near.svg" alt="" />,
        },
        {
          name: "POA",
          icon: <img src="assets/images/Blockchain/Icons/poa-network.svg" alt="" />,
        },
        {
          name: "Terra Luna",
          icon: <img src="assets/images/Blockchain/Icons/terra-luna.svg" alt="" />,
        },
        {
          name: "Polkadot",
          icon: <img src="assets/images/Blockchain/Icons/polkadot.svg" alt="" />,
        },
        {
          name: "Solana",
          icon: <img src="assets/images/Blockchain/Icons/solana.svg" alt="" />,
        },
         {
          name: "Stellar",
          icon: <img src="assets/images/Blockchain/Icons/stellar-bc.svg" alt="" />,
        },

        {
          name: "Ethereum",
          icon: <img src="assets/images/Blockchain/Icons/ethereum-logo.svg" alt="" />,
        },
      ],
    },
    {
      id: 3,
      name: "Blockchain Cloud",
      icon: <img src="assets/images/Blockchain/cloud-platform-tools-icon.svg" alt="" />,
      technologies: [
        {
          name: "Amazon Managed Blockchain",
          icon: <img src="assets/images/Blockchain/Icons/amazon.svg" alt="" />,
        },
        {
          name: "IBM Blockchain",
          icon: <img src="assets/images/Blockchain/Icons/ibm-blockchain.svg" alt="" />,
        },
        {
          name: "Oracle Blockchain",
          icon: <img src="assets/images/Blockchain/Icons/oracle-blockchain.svg" alt="" />,
        },
       
      ],
    },
    {
      id: 4,
      name: "Smart Contract Programming Languages",
      icon: <img src="assets/images/Blockchain/smart-contract-programming-languages-tools-icon.svg" alt="" />,
      technologies: [
        {
          name: "Solidity",
          icon: <img src="assets/images/Blockchain/Icons/solidity.svg" alt="" />,
        },
        {
          name: "Rust",
          icon: <img src="assets/images/Blockchain/Icons/rust.svg" alt="" />,
        },
        {
          name: "vyper",
          icon: <img src="assets/images/Blockchain/Icons/vyper.svg" alt="" />,
        },
        {
          name: "Webassembly",
          icon: <img src="assets/images/Blockchain/Icons/webassembly.svg" alt="" />,
        },
        
      ],
    },
    {
      id: 5,
      name: "Smart Contract Development and Testing Frameworks",
      icon: (
        <img
          src="assets/images/Blockchain/smart-contract-programming-languages-tools-icon.svg"
          alt=""
        />
      ),
      technologies: [
       
        {
          name: "Truffle",
          icon: <img src="assets/images/Blockchain/Icons/truffle.svg" alt="" />,
        },
        {
          name: "Hardhat",
          icon: <img src="assets/images/Blockchain/Icons/hardhat.svg" alt="" />,
        },
        {
          name: "Brownie",
          icon: <img src="assets/images/Blockchain/Icons/brownie.svg" alt="" />,
        },
        {
          name: "Embark",
          icon: <img src="assets/images/Blockchain/Icons/embark.svg" alt="" />,
        },
        {
          name: "Waffle",
          icon: <img src="assets/images/Blockchain/Icons/waffle.svg" alt="" />,
        },
        {
          name: "Open Zeppelin",
          icon: <img src="assets/images/Blockchain/Icons/openzepplin.svg" alt="" />,
        },
        {
          name: "Solidity Coverage",
          icon: <img src="assets/images/Blockchain/Icons/solidity-coverage.svg" alt="" />,
        },
        {
          name: "White Block",
          icon: <img src="assets/images/Blockchain/Icons/whiteblock.svg" alt="" />,
        },
      ],
    },

    {
      id:6,
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
      id: 7,
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
      id: 8,
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
    
  ];

  return (
    <div className="py-5 digital-transformation">
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="mb-4">  Blockchain Tech Stack We Trust to Decentralize Your Business</h1>
            <p className="mb-4">   Our team is adept at choosing the best combination of technologies, platforms, and frameworks to offer you the best enterprise blockchain development services that are reliable, secure, and future-proof. As a leading DevOps services company., we seamlessly integrate these blockchain solutions with your existing workflows, ensuring smooth implementation and continuous improvement.</p>
          </Col>
        </Row>

        {/* Desktop view */}
        <Row className="desktop-view">
          <Col lg={6}>
            <ul className="side-menu">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`menu-item ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="menu-icon">{tab.icon}</span>
                  {tab.name}
                  {activeTab === tab.id && <span className="menu-arrow">▶</span>}
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={6}>
            <div className="technology-box">
              {tabs.find((t) => t.id === activeTab)?.technologies.length ? (
                <div className="tech-grid">
                  {tabs
                    .find((t) => t.id === activeTab)!
                    .technologies.map((tech, i) => (
                      <div key={i} className="tech-item">
                        <span className="tech-icon">{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                </div>
              ) : (
                <p className="no-tech">No technologies listed for this category.</p>
              )}
            </div>
          </Col>
        </Row>

        {/* Mobile Accordion */}
        <div className="mobile-view"  >
          {tabs.map((tab) => (
            <div key={tab.id} className={`accordion-item ${activeTab === tab.id ? "active" : ""}`}>
              <div
                className="accordion-header"
                onClick={() => setActiveTab(activeTab === tab.id ? -1 : tab.id)}
              >
                <span className="menu-icon">{tab.icon}</span>
                <span className="title" >{tab.name}</span>
             <span className="arrow">
  {activeTab === tab.id ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
</span>
              </div>
              {activeTab === tab.id && (
                <div className="accordion-content">
                  {tab.technologies.length > 0 ? (
                    <div className="tech-grid">
                      {tab.technologies.map((tech, i) => (
                        <div key={i} className="tech-item">
                          <span className="tech-icon">{tech.icon}</span>
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="no-tech">No technologies listed for this category.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Tech;
