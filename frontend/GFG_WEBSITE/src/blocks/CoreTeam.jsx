import React from "react";
import ProfileCard from "../components/ProfileCard";

const CoreTeam = () => {
  const teamMembers = [
    { name: "Anshuman Mishra", role: "Chairperson", img: "/avatar.jpeg" },
    { name: "Aditya Raj", role: "Vice Chairperson", img: "/assets/aditya.jpg" },
    { name: "Piyush Keshari", role: "Event Head", img: "/assets/piyush.png" },
    {
      name: "Anuj Vishwakarma",
      role: "Technical Head",
      img: "/assets/anuj.jpg",
    },
    {
      name: "Sakshi Aggrawal",
      role: "Content Head",
      img: "/assets/sakshi.png",
    },
    { name: "Sameer", role: "GD/Branding Head", img: "/avatar.jpeg" },
  ];
  return (
    <>
      <div className="py-10 px-32">
        <h2 className="text-3xl font-bold text-center">OUR CORE TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <>
              <ProfileCard coreTeam={member} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoreTeam;
