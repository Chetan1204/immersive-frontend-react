import React, { useState } from "react";


type TechCategory = {
  name: string;
  items: { icon: string; label: string }[];
};

const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Languages");

  const categories: TechCategory[] = [
    {
      name: "Languages",
      items: [
        { icon: "assets/images/DedicatedTeam/logos/java.svg", label: "JAVA" },
        { icon: "assets/images/DedicatedTeam/logos/c.svg", label: "C#" },
        { icon: "assets/images/DedicatedTeam/logos/c-sharp.svg", label: "C/C++" },
        { icon: "assets/images/DedicatedTeam/logos/Objective.svg", label: "OBJECTIVE C" },
        { icon: "assets/images/DedicatedTeam/logos/Groovy.svg", label: "GROOVY" },
        { icon: "assets/images/DedicatedTeam/logos/swift.svg", label: "SWIFT" },
        { icon: "assets/images/DedicatedTeam/logos/kotlin.svg", label: "KOTLIN" },
        { icon: "assets/images/DedicatedTeam/logos/python.svg", label: "PYTHON" },
        { icon: "assets/images/DedicatedTeam/logos/php.svg", label: "PHP" },
        { icon: "assets/images/DedicatedTeam/logos/rust.svg", label: "RUST" },
        { icon: "assets/images/DedicatedTeam/logos/scala.svg", label: "SCALA" },
      ],
    },
    {
      name: "Frameworks",
      items: [
         { icon: "assets/images/DedicatedTeam/logos/JDBC.svg", label: "JDBC/JPA" },
        { icon: "assets/images/DedicatedTeam/logos/JMS.svg", label: "JMS" },
        { icon: "assets/images/DedicatedTeam/logos/hibernate.svg", label: "HIBERNATE" },
        { icon: "assets/images/DedicatedTeam/logos/dot-net.svg", label: ".NET" },
        { icon: "assets/images/DedicatedTeam/logos/ejb.svg", label: "EJB" },
        { icon: "assets/images/DedicatedTeam/logos/apache-camel.svg", label: "APACHE CAMEL" },
        { icon: "assets/images/DedicatedTeam/logos/nodejs.svg", label: "NODE JS" },
        { icon: "assets/images/DedicatedTeam/logos/firebase.svg", label: "FIREBASE" },
        { icon: "assets/images/DedicatedTeam/logos/LDAP.svg", label: "LDAP/ACTIVE DIRECTORY" },
        { icon: "assets/images/DedicatedTeam/logos/Reactive.svg", label: "REACTIVE(AKKA, RXJAVA,REACTOR" },

      ],
    },
    {
      name: "Mobile",
      items: [
         { icon: "assets/images/DedicatedTeam/logos/apple.svg", label: "IOS" },
        { icon: "assets/images/DedicatedTeam/logos/Android.svg", label: "ANDROID" },
        { icon: "assets/images/DedicatedTeam/logos/html5.svg", label: "HTML5" },
        { icon: "assets/images/DedicatedTeam/logos/react.svg", label: "REACT" },
        { icon: "assets/images/DedicatedTeam/logos/Xamarin.svg", label: "XAMARIN" },
        { icon: "assets/images/DedicatedTeam/logos/js.svg", label: "JAVA SCRIPT" },

      ],
    },
    {
      name: "Web",
      items: [
         { icon: "assets/images/DedicatedTeam/logos/VueJS.svg", label: "VUE" },
        { icon: "assets/images/DedicatedTeam/logos/sass.svg", label: "SASS" },
        { icon: "assets/images/DedicatedTeam/logos/Coffee.svg", label: "COFFEE" },
        { icon: "assets/images/DedicatedTeam/logos/angular.svg", label: "ANGULAR" },
        { icon: "assets/images/DedicatedTeam/logos/WebGL.svg", label: "WEBGL" },

      ],
    },
    {
      name: "Database Management",
      items: [
         { icon: "assets/images/DedicatedTeam/logos/NOSQL.svg", label: "NOSQL" },
        { icon: "assets/images/DedicatedTeam/logos/MySQL.svg", label: "MYSQL" },
        { icon: "assets/images/DedicatedTeam/logos/Oracle.svg", label: "ORACLE SQL" },
        { icon: "assets/images/DedicatedTeam/logos/PostgreSQL.svg", label: "POSTGRESQL" },
        { icon: "assets/images/DedicatedTeam/logos/Microsoft-SQL.svg", label: "MICROSOFT SQL" },
      ],
    },
    {
      name: "Cloud",
      items: [
         { icon: "assets/images/DedicatedTeam/logos/aws.svg", label: "AMAZON WEB SERVICES (AWS)" },
        { icon: "assets/images/DedicatedTeam/logos/Google.svg", label: "GOOGLE CLOUD" },
        { icon: "assets/images/DedicatedTeam/logos/Oracle-cloud.svg", label: "ORACLE CLOUD" },
        { icon: "assets/images/DedicatedTeam/logos/IBM-Cloud.svg", label: "IBM CLOUD" },
        { icon: "assets/images/DedicatedTeam/logos/Microsoft-Azure.svg", label: "MICROSOFT AZURE" },
      ],
    },
  ];

  const activeCategory = categories.find((c) => c.name === activeTab);

  return (
    <section className="technologies">
      <div className="container">
        <div className="section-header">
          <h2>Technologies Our Experts Use</h2>
          <p>
            Our talented developers have been assisting prominent firms in a variety of industries with their projects. 
            We understand that the knowledge, talents, and mindset of any devoted development team are critical to their success.
          </p>
        </div>

        <div className="row">
          <div className="col tabs">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`tab ${activeTab === cat.name ? "active" : ""}`}
                onClick={() => setActiveTab(cat.name)}
              >
                {cat.name}
              </div>
            ))}
          </div>

          <div className="col content">
            <div className="tech-grid">
              {activeCategory?.items.length ? (
                activeCategory.items.map((item, idx) => (
                  <div key={idx} className="tech-card">
                    <img src={item.icon}  />
                    <span>{item.label}</span>
                  </div>
                ))
              ) : (
                <p className="empty">No technologies added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
