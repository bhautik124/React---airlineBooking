import React from "react";
import { MdFlight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="w-full h-screen object-cover"
        src="src/components/Untitled design.png"
        alt=""
      />
      <div className="absolute bottom-0 w-full flex justify-center items-center p-5">
        <h3
          className="text-9xl p-4 inline-block mt-[-17%] "
          style={{
            color: "#7D5036",
            textShadow:
              "5px 5px 0 black, -5px -5px 0 black, 5px -5px 0 black, -5px 5px 0 black",
          }}
        >
          smart fly with JetZ
        </h3>
        <h3 className="text-9xl ml-10 text-black mt-[-17%]">
          <MdFlight />
        </h3>
      </div>
      <div className="mt-[-5%] flex justify-center items-center text-3xl">
        <Link to="/bookings">
          <button
            className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2"
            
          >
            Explore Flights!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
