import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import { MdOutlineDashboard } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div className="w-full p-4 flex justify-between">
      <div className="flex flex-row justify-center items-center gap-3">
        <img src={Logo} className="w-[30px] h-[30px] " />
        <span className="hidden sm:block font-extrabold text-3xl text-blue-700">
          Smart Attendence
        </span>
      </div>
      <div className="hidden sm:flex gap-5">
        <div className="flex justify-center items-center gap-2 p-2 transition hover:bg-blue-200 hover:duration-700">
          <MdOutlineDashboard />
          <Link to="/student-dashboard">DashBoard</Link>
        </div>
        <div className="flex justify-center items-center gap-2 p-2 transition hover:bg-blue-200 hover:duration-700">
          <FaUserCheck />
          <Link to="/attendence-session">Attendence</Link>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-5">
        <Link to="#">
          <button
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium tracking-wide text-white transition rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600
        hover:from-indigo-600 hover:to-blue-500
        hover:scale-105 hover:shadow-xl
        focus:outline-none"
          >
            Sign In
          </button>
        </Link>
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
