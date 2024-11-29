import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import ProfileCard from "../components/ProfileCard";
import Slider from "../components/Slider";

function Home() {
  const [loggedInUser, setloggedInUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    setloggedInUser(localStorage.getItem("loggedInUser"));
  });

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");

    setTimeout(() => {
      navigate("/login");
      handleSuccess("Logged out Succesfully");
    }, 1000);
  };

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
    <div>
      <nav className="w-full  p-1 rounded-md shadow-sm  mt-6 text-center align-middle justify-center">
        <div className=" text-6xl ml-2 inline-block gap-5 text-fuchsia-200">
          Welcome {loggedInUser}
        </div>
        <div className="m-6">
          <button
            className="bg-yellow-200 m-1 p-1 text-black rounded-md hover:bg-red-400"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="bg-yellow-200 m-1 p-1 text-black rounded-md hover:bg-red-400"
            onClick={Navigate("/home")}
          >
            Login
          </button>
          <button
            className="bg-yellow-200 m-1 p-1 text-black rounded-md hover:bg-red-400"
            onClick={Navigate("/home")}
          >
            Signin
          </button>
          <ToastContainer />
        </div>
      </nav>

      {/*  */}

      <section className="flex flex-wrap p-8 items-center bg-green-50">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            AIM OF GFG STUDENT CHAPTER GGV:
          </h1>
          <p>
            The aim of the Geeks for Geeks (GFG) Student Chapter is to foster a
            community of tech enthusiasts within educational institutions,
            providing a platform for students to enhance their technical
            knowledge, coding skills, and professional development...
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          {/* <Slider /> */}
          {/* remove vid and add slides */}
          <video
            autoplay
            loop
            muted
            src="/assets/gfg-video.mp4"
            className="rounded-lg"
          />
        </div>
      </section>

      <div className="p-8">
        <h2 className="text-3xl font-bold text-center">OUR CORE TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <>
              <ProfileCard coreTeam={member} />
            </>
          ))}
        </div>
      </div>

      <div>
        <Link to="/TeamPage">Visit our Teams</Link>
      </div>
    </div>
  );
}

export default Home;
