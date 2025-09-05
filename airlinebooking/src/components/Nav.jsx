import React from "react";
import { NavLink } from "react-router-dom";
import { PiAirplaneInFlightFill } from "react-icons/pi";

const Nav = () => {
  return (
    <div className="absolute z-10 w-full px-4 py-2 sm:py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-3xl sm:text-4xl md:text-5xl text-black">
          <PiAirplaneInFlightFill />
          <h3 className="font-sans ml-2">JetZ</h3>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase px-3 sm:px-5 py-2 transition-colors ${
                isActive
                  ? "font-bold text-[#7D5036] [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000]"
                  : "text-black hover:text-[#7D5036]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              `text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase px-3 sm:px-5 py-2 transition-colors ${
                isActive
                  ? "font-bold text-[#7D5036] [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000]"
                  : "text-black hover:text-[#7D5036]"
              }`
            }
          >
            Bookings
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg sm:text-2xl md:text-3xl lg:text-4xl uppercase px-3 sm:px-5 py-2 transition-colors ${
                isActive
                  ? "font-bold text-[#7D5036] [text-shadow:2px_2px_0_#000,-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000]"
                  : "text-black hover:text-[#7D5036]"
              }`
            }
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="border-b-4 border-[#7D5036] mt-2"></div>
    </div>
  );
};

export default Nav;
