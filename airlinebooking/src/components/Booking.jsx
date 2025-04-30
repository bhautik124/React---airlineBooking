import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";

const Booking = () => {
  const [val, setVal] = useState([]);

  const data = () => {
    const api = "https://mocki.io/v1/c6bacf30-a2fe-4449-a508-f26c7978139d";
    axios
      .get(api)
      .then((res) => {
        setVal(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    data();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <Link to={"/"}>
          <button className="bg-[#7D5036] text-[#EFEBE0]  border-4 border-black rounded-[25px] p-2 text-xl ">
            Head back to the Home page
          </button>
        </Link>
      </div>

      <div className="w-full min-h-screen bg-[#EFEBE0] flex justify-center items-center mt-[-6%] ">
        <div className="w-full max-w-screen-lg h-2/5 flex flex-col mt-[10%] flex justify-between items-center ">
          {val.map((item, index) => (
            <div
              key={index}
              className="w-[70%] h-full p-10 rounded-[5%] flex flex-col justify-between items-center border-4 border-[#7D5036] mb-10"
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[#7D5036] text-4xl">
                        {item.departureShortForm}
                      </h3>
                      <h3 className="text-[#7D5036] text-xl">
                        {item.departureLongForm}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#7D5036] mt-[40%]  ">
                      <span className="text-xl">Boarding Date</span> <br />{" "}
                      <span className="text-2xl">{item.boardingDate}</span>
                    </h3>
                  </div>

                  <div>
                    <h3 className="text-[#7D5036] mt-5">
                      <span className="text-xl">Boarding Time</span> <br />{" "}
                      <span className="text-2xl">{item.boardingTime}</span>
                    </h3>
                  </div>
                </div>

                <div>
                  <div className="text-6xl font-bold">
                    <PiAirplaneTakeoffLight />
                  </div>
                  <div className="text-2xl">{item.flightDuration}</div>
                </div>

                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[#7D5036] text-4xl">
                        {item.arrivalShortForm}
                      </h3>
                      <h3 className="text-[#7D5036] text-xl">
                        {item.arrivalLongForm}
                      </h3>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[#7D5036] mt-[40%]">
                      <span className="text-xl">Departure Date</span> <br />{" "}
                      <span className="text-2xl">{item.departureDate}</span>
                    </h3>
                  </div>

                  <div>
                    <h3 className="text-[#7D5036] mt-5 ">
                      <span className="text-xl">arrival Time</span> <br />{" "}
                      <span className="text-2xl">{item.arrivalTime}</span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center mt-5">
                <Link to={`/bookings/${item.id}`}>
                  <button className="bg-[#7D5036] border-4 border-black rounded-[25px] p-2 text-xl text-white">
                    Know more!
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
