// components/Teams.js
import React from "react";
import Card from "../components/Card";

const teams = [
  {
    name: "Web Dev",
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?ga=GA1.1.564776824.1727790315&semt=ais_hybrid",
  },
  {
    name: "AI/ML",
    img: "https://img.freepik.com/free-vector/scientists-studying-neural-connections-programmers-writing-codes-machine-brain_74855-14157.jpg?ga=GA1.1.564776824.1727790315&semt=ais_hybrid",
  },
  {
    name: "App Dev",
    img: "https://elegantprodesigns.com/wp-content/uploads/2024/07/app-development-1-1024x811.png",
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

const TeamPage = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center">OUR TECHNICAL TEAMS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {teams.map((team) => (
          <Card teamData={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
