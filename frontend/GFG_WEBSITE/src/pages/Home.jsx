import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import Slider from "../components/Slider";
import CoreTeam from "../blocks/CoreTeam";
import Offerings from "../blocks/Offerings";
import ContactUs from "../blocks/ContactUs";
import Navbar from "../components/Navbar";

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

  return (
    <div style={{ backgroundImage: "linear-gradient(115deg, #0F9D58, #A8E6CF)" }}>
    <Navbar user={loggedInUser} handleLogout={handleLogout}/>
      <section className="flex flex-wrap p-8 items-center bg-green-50">
        <div className="w-full">
          <h1
            className="text-4xl font-bold mb-4 text-gray-800 text-center"
            id="aim"
          >
            OUR AIM
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
      <Offerings />

      <CoreTeam />

      <div className="my-20 grid place-items-center ">
        <Link className="bg-[#31EDCE] p-4 font-serif rounded-md" to="/TeamPage">
          Visit our Teams
        </Link>
      </div>

      <ContactUs />
    </div>
  );
}

export default Home;
