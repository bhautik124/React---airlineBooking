import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { dataContext } from "../context/Context";

const Booking = () => {
  const { data } = useContext(dataContext);

  return (
    <div className="min-h-screen bg-[#EFEBE0] flex flex-col items-center">
      <div className="w-full max-w-screen-lg px-4 py-6 flex justify-center">
        <Link to="/">
          <button className="w-full sm:w-auto bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-full px-6 py-2 text-lg sm:text-xl font-semibold hover:bg-[#6b432d] transition-colors">
            Head back to the Home page
          </button>
        </Link>
      </div>

      <div className="w-full max-w-screen-lg px-4 py-8 flex flex-col items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white p-6 sm:p-8 rounded-2xl border-4 border-[#7D5036] mb-8 flex flex-col shadow-lg"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div>
                  <h3 className="text-[#7D5036] text-2xl sm:text-3xl md:text-4xl font-bold">
                    {item.departureShortForm}
                  </h3>
                  <h3 className="text-[#7D5036] text-sm sm:text-lg md:text-xl">
                    {item.departureLongForm}
                  </h3>
                </div>
                <h3 className="text-[#7D5036] mt-4 sm:mt-8">
                  <span className="text-sm sm:text-lg">Boarding Date</span>
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl">
                    {item.boardingDate}
                  </span>
                </h3>
                <h3 className="text-[#7D5036] mt-3 sm:mt-5">
                  <span className="text-sm sm:text-lg">Boarding Time</span>
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl">
                    {item.boardingTime}
                  </span>
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#7D5036]">
                  <PiAirplaneTakeoffLight />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-[#7D5036]">
                  {item.flightDuration}
                </div>
              </div>

              <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                <div>
                  <h3 className="text-[#7D5036] text-2xl sm:text-3xl md:text-4xl font-bold">
                    {item.arrivalShortForm}
                  </h3>
                  <h3 className="text-[#7D5036] text-sm sm:text-lg md:text-xl">
                    {item.arrivalLongForm}
                  </h3>
                </div>
                <h3 className="text-[#7D5036] mt-4 sm:mt-8">
                  <span className="text-sm sm:text-lg">Departure Date</span>
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl">
                    {item.departureDate}
                  </span>
                </h3>
                <h3 className="text-[#7D5036] mt-3 sm:mt-5">
                  <span className="text-sm sm:text-lg">Arrival Time</span>
                  <br />
                  <span className="text-lg sm:text-xl md:text-2xl">
                    {item.arrivalTime}
                  </span>
                </h3>
              </div>
            </div>

            <div className="w-full flex justify-center mt-6">
              <Link to={`/bookings/${item.id}`}>
                <button className="w-full sm:w-auto bg-[#7D5036] text-white border-4 border-black rounded-full px-6 py-2 text-lg sm:text-xl font-semibold hover:bg-[#6b432d] transition-colors">
                  Know more!
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
