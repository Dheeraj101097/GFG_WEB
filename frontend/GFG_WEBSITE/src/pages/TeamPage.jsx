// components/Teams.js
import React from "react";
import Card from "../components/Card";

const techteams = [
  {
    name: "Web Dev",
    img2: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?ga=GA1.1.564776824.1727790315&semt=ais_hybrid",
    img: " https://static.vecteezy.com/system/resources/previews/001/545/689/large_2x/web-development-concept-in-flat-style-vector.jpg",
  },
  {
    name: "App Dev",
    img: "https://elegantprodesigns.com/wp-content/uploads/2024/07/app-development-1-1024x811.png",
  },
  {
    name: "AI/ML",
    img2: "https://img.freepik.com/free-vector/scientists-studying-neural-connections-programmers-writing-codes-machine-brain_74855-14157.jpg?ga=GA1.1.564776824.1727790315&semt=ais_hybrid",
    img: "https://static.vecteezy.com/system/resources/previews/026/357/083/non_2x/neural-networks-simulate-human-brain-for-ai-learning-vector.jpg",
  },

  {
    name: "CP DSA",
    img: "https://img.freepik.com/free-vector/girls-boys-competing-esports-cup-using-pc-winning-cup-gaming-championship-flat-illustration_74855-20579.jpg",
  },
  {
    name: "Game Dev",
    img: "https://png.pngtree.com/png-vector/20220715/ourmid/pngtree-computer-games-development-abstract-concept-vector-illustration-png-image_5926015.png",
  },
  {
    name: "Internet of Things",
    img: "https://img.freepik.com/premium-vector/smart-home-concept-3d-isometric-view-vector_287964-8201.jpg?ga=GA1.1.564776824.1727790315&semt=ais_hybrid",
  },
  {
    name: "Cyber Security",
    img: "https://www.terranovasecurity.com/sites/default/files/2024-02/cyber-security-training-cta_0.jpg",
  },
];

// non tech

const nontechteams = [
  {
    name: "Graphic Design",
    img: "https://img.freepik.com/free-vector/graphic-designer-working-her-computer_74855-5481.jpg?ga=GA1.2.564776824.1727790315&semt=ais_hybrid", // Replace with specific Freepik link
  },
  {
    name: "Content Writing",
    img: "https://img.freepik.com/free-vector/branding-identity-corporate-vector-template_53876-97349.jpg?ga=GA1.2.564776824.1727790315&semt=ais_hybrid", // Replace with specific Freepik link
  },
  {
    name: "Social Media",
    img: "https://img.freepik.com/free-vector/digital-marketing-isometric-landing-page_23-2148297320.jpg?ga=GA1.2.564776824.1727790315&semt=ais_hybrid", // Replace with specific Freepik link
  },
  {
    name: "Marketing & Public Relations",
    img: "https://img.freepik.com/free-vector/flat-public-relations-concept-illustration_52683-81013.jpg?ga=GA1.2.564776824.1727790315&semt=ais_hybrid", // Replace with specific Freepik link
  },
  {
    name: "Event Management",
    img: "https://img.freepik.com/free-vector/concept-event-planning-illustration_114360-4167.jpg?ga=GA1.2.564776824.1727790315&semt=ais_hybrid", // Replace with specific Freepik link
  },
  {
    name: "Photography & Videography",
    img: "https://img.freepik.com/free-vector/human-resources-hr-manager-working-with-computer-illustration_1150-58623.jpg?ga=GA1.2.564776824.1727790315&semt=ais_hybrid", // Replace with specific Freepik link
  },
];

const TeamPage = () => {
  return (
    <>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center">OUR TECHNICAL TEAMS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {techteams.map((team) => (
            <Card teamData={team} />
          ))}
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-center">
          OUR NON TECHNICAL TEAMS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {nontechteams.map((team) => (
            <Card teamData={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
