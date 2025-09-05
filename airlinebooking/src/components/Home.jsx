import React from "react";
import { MdFlight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="Untitled design.png"
        alt="Airplane in sky"
      />

      <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 md:pb-12 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center mb-6 md:mb-8 w-full">
          <h3
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center md:text-left p-2 md:p-4 inline-block"
            style={{
              color: "#7D5036",
              textShadow:
                "4px 4px 0 black, -4px -4px 0 black, 4px -4px 0 black, -4px 4px 0 black",
              lineHeight: "1.2",
            }}
          >
            fly with JetZ
          </h3>
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black mt-2 md:mt-0 md:ml-4 lg:ml-6">
            <MdFlight />
          </div>
        </div>

        <div className="mt-2 md:mt-4">
          <Link to="/bookings">
            <button className="bg-[#7D5036] text-[#EFEBE0] border-3 md:border-4 border-black rounded-2xl md:rounded-[25px] px-6 py-3 text-xl md:text-2xl lg:text-3xl font-bold transition-transform hover:scale-105">
              Explore Flights!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
