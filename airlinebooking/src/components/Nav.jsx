import React from "react";
import { NavLink } from "react-router-dom";
import { PiAirplaneInFlightFill } from "react-icons/pi";

const Nav = () => {
  return (
    <div className="absolute z-10 w-full p-2 mt-[-0.5%]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-5xl ml-[5%] text-black">
          <PiAirplaneInFlightFill />
          <h3 className="font-sans ml-2">JetZ</h3>
        </div>
        <div className="flex mr-[10%]">
          <NavLink
            to="/"
            style={(e) => ({
              fontWeight: e.isActive ? "bold" : "",
              color: e.isActive ? "#7D5036" : "",
              textShadow: e.isActive
                ? "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
                : "",
            })}
          >
            <div className="text-4xl p-5 uppercase">Home</div>
          </NavLink>

          <NavLink
            to="/bookings"
            style={(e) => ({
              fontWeight: e.isActive ? "bold" : "",
              color: e.isActive ? "#7D5036" : "",
              textShadow: e.isActive
                ? "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
                : "",
            })}
          >
            <div className="text-4xl p-5 uppercase">Bookings</div>
          </NavLink>

          <NavLink
            to="/about"
            style={(e) => ({
              fontWeight: e.isActive ? "bold" : "",
              color: e.isActive ? "#7D5036" : "",
              textShadow: e.isActive
                ? "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000"
                : "",
            })}
          >
            <div className="text-4xl p-5 uppercase">About</div>
          </NavLink>
        </div>
      </div>
      <div className="border-b-4 border-[#7D5036]"></div>
    </div>
  );
};

export default Nav;
