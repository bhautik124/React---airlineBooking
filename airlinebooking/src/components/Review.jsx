import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { dataContext } from "../context/Context";

const Review = () => {
  const { id } = useParams();
  const location = useLocation();
  const { passengers, totalPrice } = location.state || {
    passengers: 1,
    totalPrice: 0,
  };

  const { data } = useContext(dataContext);
  const [booking, setBooking] = useState(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    if (data.length > 0) {
      const bookingData = data.find((item) => item.id.toString() === id);

      if (bookingData) {
        if (typeof bookingData.price === "string") {
          bookingData.price = parseFloat(
            bookingData.price.replace(/[^0-9.]/g, "")
          );
        } else {
          bookingData.price = parseFloat(bookingData.price);
        }
        setBooking(bookingData);
      }
    }
  }, [data, id]);

  useEffect(() => {
    if (booking) {
      reviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [booking]);

  if (!booking) {
    return (
      <div className="w-full min-h-screen bg-[#EFEBE0] flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#EFEBE0] flex flex-col items-center px-4 py-8">
      <div
        ref={reviewRef}
        className="w-full max-w-4xl p-6 md:p-10 mt-4 md:mt-10 border-2 md:border-4 border-[#7D5036] text-[#7D5036] rounded-xl md:rounded-[5%] bg-white shadow-lg"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl md:text-4xl font-bold">
              {booking.departureShortForm}
            </h3>
            <h4 className="text-lg md:text-xl opacity-80">
              {booking.departureLongForm}
            </h4>
          </div>

          <div className="text-center mb-6 md:mb-0">
            <PiAirplaneTakeoffLight size={40} className="md:size-70 mx-auto" />
            <div className="text-xl md:text-2xl mt-2">
              {booking.flightDuration}
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-4xl font-bold">
              {booking.arrivalShortForm}
            </h3>
            <h4 className="text-lg md:text-xl opacity-80">
              {booking.arrivalLongForm}
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Flight Date</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.boardingDate}</p>
          </div>

          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Gate</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.gateNumber}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Airline</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.airline}</p>
          </div>

          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Flight NO</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.flightNumber}</p>
          </div>

          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Seat Number</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.seatNumber}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Departure Time</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.departureTime}</p>
          </div>

          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Boarding Time</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.boardingTime}</p>
          </div>

          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Arrival Time</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.arrivalTime}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">
              Total Passenger
            </h5>
            <p className="text-xl md:text-2xl mt-2">{passengers}</p>
          </div>

          <div className="text-center">
            <h5 className="text-lg md:text-xl font-semibold">Class</h5>
            <p className="text-xl md:text-2xl mt-2">{booking.class}</p>
          </div>
        </div>

        <div className="border-b-2 md:border-b-4 border-[#7D5036] my-6"></div>

        <div className="text-center text-2xl md:text-4xl font-bold mt-8">
          Total payable amount: $
          {isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8 md:mt-10">
        <Link to={`/`} className="w-full md:w-auto block">
          <button className="bg-[#7D5036] text-[#EFEBE0] border-2 md:border-4 border-black rounded-lg md:rounded-[25px] px-6 py-3 text-lg md:text-xl w-full">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;
