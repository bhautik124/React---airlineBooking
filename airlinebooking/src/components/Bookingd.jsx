import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { dataContext } from "../context/Context";

const Bookingd = () => {
  const { data } = useContext(dataContext);
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (Array.isArray(data) && data.length > 0) {
        const foundBooking = data.find((item) => item.id.toString() === id);
        if (!foundBooking) {
          setError("Booking not found");
        } else {
          setBooking(foundBooking);
        }
      } else {
        setError("No data available or data is not an array");
      }
    } catch (err) {
      setError("An error occurred while fetching booking");
      console.error(err);
    }
  }, [data, id]);

  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!booking) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen bg-[#EFEBE0] flex flex-col items-center">
      <div className="flex justify-center items-center mt-10">
        <Link to="/bookings">
          <button className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2 text-xl">
            Back to Bookings
          </button>
        </Link>
      </div>
      <div className="w-full max-w-screen-lg p-10 mt-10 border-4 border-[#7D5036] text-[#7D5036] rounded-[5%]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-4xl">{booking.departureShortForm}</h3>
            <h4 className="text-xl">{booking.departureLongForm}</h4>
          </div>
          <div className="text-center">
            <PiAirplaneTakeoffLight size={70} />
            <div className="text-2xl">{booking.flightDuration}</div>
          </div>
          <div>
            <h3 className="text-4xl">{booking.arrivalShortForm}</h3>
            <h4 className="text-xl">{booking.arrivalLongForm}</h4>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="text-center">
            <h5 className="text-xl">Flight Date</h5>
            <p className="text-2xl">{booking.boardingDate}</p>
          </div>
          <div className="text-center text-xl">
            <h5 className="text-lg">Gate</h5>
            <p className="text-2xl">{booking.gateNumber}</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl">Flight NO</h5>
            <p className="text-2xl">{booking.flightNumber}</p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="text-center">
            <h5 className="text-xl">Boarding Time</h5>
            <p className="text-2xl">{booking.boardingTime}</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl">Class</h5>
            <p className="text-2xl">{booking.class}</p>
          </div>
        </div>
        <div className="border-b-4 border-[#7D5036] mt-5"></div>
        <div className="text-right mt-8 text-5xl">{booking.price}</div>
      </div>
      <div className="mt-10">
        <Link to={`/bookings/${id}/seats`}>
          <button className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2 text-xl">
            Select number of passengers!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bookingd;
