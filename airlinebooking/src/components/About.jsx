import React, { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#EFEBE0] text-[#7D5036] overflow-hidden">
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-[#7D5036] text-[#EFEBE0] p-2 rounded-md"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#EFEBE0] flex flex-col items-center justify-center">
          <Link
            to="/"
            className="text-2xl mb-6"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/bookings"
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            Book a Flight
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-[#7D5036] text-[#EFEBE0] px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      )}

      <div className="hidden md:flex justify-center items-center py-6 bg-[#EFEBE0]">
        <Link to={"/"}>
          <button className="bg-[#7D5036] text-[#EFEBE0] border-2 md:border-4 border-black rounded-xl md:rounded-[25px] px-4 py-2 text-lg md:text-xl">
            Head back to the Home page
          </button>
        </Link>
      </div>

      <div className="w-full min-h-screen flex flex-col md:flex-row pt-16 md:pt-0">
        <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center">
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6">
            ready <br /> to take off?
          </h3>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
            pariatur, est dolore atque nihil!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 mb-6 md:mb-10">
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                29+
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl">
                dedicated boeing 007 airliner.
              </p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                24/7
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl">
                air traffic control (ATC) service
              </p>
            </div>
          </div>

          <div className="hidden md:block mb-6 md:mb-10">
            <h3 className="text-4xl lg:text-5xl font-bold">24/7</h3>
            <p className="text-xl lg:text-2xl">
              air traffic control (ATC) service
            </p>
          </div>

          <div className="border-t-2 border-[#7D5036] my-6 md:my-8"></div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              want to
            </h3>
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold">
                fly with us?
              </h3>
              <Link to={"/bookings"} className="md:self-center">
                <button className="bg-[#7D5036] text-[#EFEBE0] border-2 md:border-4 border-black rounded-xl md:rounded-[25px] px-6 py-3 text-lg md:text-xl lg:text-2xl w-full md:w-auto">
                  Book a flight
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="w-full h-64 sm:h-80 md:h-full object-cover"
            src="https://images.unsplash.com/photo-1598053878908-a49df0ebef9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaWxvdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Pilot in cockpit"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
