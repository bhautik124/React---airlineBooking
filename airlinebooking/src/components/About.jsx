import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* <div className="flex justify-center items-center mt-10 bg-[#EFEBE0]">
        <Link to={"/"}>
          <button className="bg-[#7D5036] border-4 border-black rounded-[25px] p-2 text-xl ">
            Head back to the Home page
          </button>
        </Link>
      </div> */}

      <div className="w-full min-h-screen bg-[#EFEBE0] mt-[-6%] text-[#7D5036] ">
        <div className="w-full min-h-screen flex ">
          <div className="mt-[6%] p-10 ">
            <h3 className="text-7xl ">
              ready <br /> to take off?
            </h3>
            <p className="text-2xl  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rem
              pariatur, est dolore atque nihil!
            </p>

            <div className=" p-10 flex mt-5 gap-[20%] ">
              <div>
                <h3 className="text-5xl">29+</h3>
                <p className="text-2xl">dedicated boeing 007 airliner.</p>
              </div>
              <div>
                <h3 className="text-5xl">24/7</h3>
                <p className="text-2xl">air traffic control (ATC) service</p>
              </div>
            </div>
            <div className="p-10 mt-[-6%] ">
              <h3 className="text-5xl">24/7</h3>
              <p className="text-2xl">air traffic control (ATC) service</p>
            </div>

            <div className="border-2 border-b-4 border-[#7D5036]"></div>
            <div className="">
              <h3 className="text-9xl">want to</h3>
              <div className="flex gap-[6%] ">
                <h3 className="text-9xl">fly with us?</h3>

                <Link to={"/bookings"}>
                  <button className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2 text-2xl ">
                    Book a flight 
                  </button>
                </Link>

              </div>
            </div>
          </div>

          <div className="">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1598053878908-a49df0ebef9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwaWxvdHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
