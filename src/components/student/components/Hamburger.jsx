import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamberger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button onClick={handleHamberger}>
        <GiHamburgerMenu />
      </button>

      {/* Mobile Menu */}
      {/* Menu Bar */}
      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
          <Link
            to="/student-dashboard"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            to="/attendence-session"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Attendence
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
