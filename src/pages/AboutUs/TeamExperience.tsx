import React, { useState } from "react";

const teamData = [
  {
    img: "assets/images/experience1.png",
    name: "Shailesh Singh Parihar",
    role: "Project Manager",
    description:
      "Working at Immersive Infotech is an enriching experience. This IT company thrives on innovation and personal development, fostering a collaborative culture. The team's expertise, transparency, and adaptability set industry benchmarks. I'm proud to be part of a team that consistently delivers exceptional results with unwavering professionalism. Immersive Infotech is where IT careers flourish.",
  },
  {
    img: "assets/images/experience1.png",
    name: "Ananya Verma",
    role: "Software Engineer",
    description:
      "Immersive Infotech has given me the opportunity to grow and work on exciting projects with a talented team...",
  },
  {
    img: "assets/images/experience1.png",
    name: "Rohan Sharma",
    role: "UI/UX Designer",
    description:
      "Designing at Immersive Infotech has been an incredible experience. The creativity and teamwork here push boundaries...",
  },
  {
    img: "assets/images/experience1.png",
    name: "Rohan Sharma",
    role: "UI/UX Designer",
    description:
      "Designing at Immersive Infotech has been an incredible experience. The creativity and teamwork here push boundaries...",
  },
  {
    img: "assets/images/experience1.png",
    name: "Rohan Sharma",
    role: "UI/UX Designer",
    description:
      "Designing at Immersive Infotech has been an incredible experience. The creativity and teamwork here push boundaries...",
  },
  {
    img: "assets/images/experience1.png",
    name: "Rohan Sharma",
    role: "UI/UX Designer",
    description:
      "Designing at Immersive Infotech has been an incredible experience. The creativity and teamwork here push boundaries...",
  },
  {
    img: "assets/images/experience1.png",
    name: "Rohan Sharma",
    role: "UI/UX Designer",
    description:
      "Designing at Immersive Infotech has been an incredible experience. The creativity and teamwork here push boundaries...",
  },
];

const TeamExperience: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(teamData[0]);

  return (
    <div className="experience-team accordion-item wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
    <div className="container py-5">
      <h2 className="mb-4">Experience with Immersive Infotech from our team</h2>
      <div className="row mb-4">
        <div className="team-flex brands-icon row-gap-4 d-flex flex-wrap gap-4 mt-3">
        {teamData.map((member, index) => (
          <div key={index} className="team-member">
            <img
              src={member.img}
              className={`img-fluid rounded ${selectedMember === member ? "active-border" : ""}`}
              alt={member.name}
              onClick={() => setSelectedMember(member)}
            />
          </div>
        ))}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">

          <h4>{selectedMember.name}</h4>
          <p className="text-primary">{selectedMember.role}</p>
        </div>
        <div className="col-lg-9">
          <p>{selectedMember.description}</p>
        </div>
      </div>

    </div>
    </div>
  );
};

export default TeamExperience;
