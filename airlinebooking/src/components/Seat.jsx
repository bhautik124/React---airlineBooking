import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { dataContext } from "../context/Context";

const Seat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(dataContext);

  const [booking, setBooking] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const bookingData = data.find((item) => item.id.toString() === id);

      if (bookingData) {
        bookingData.price = parseFloat(
          bookingData.price.replace(/[^\d.-]/g, "")
        );
        setBooking(bookingData);
      } else {
        console.error("Booking not found for id:", id);
      }
    }
  }, [data, id]);

  useEffect(() => {
    if (booking) {
      const newTotalPrice = booking.price * passengers;
      setTotalPrice(newTotalPrice);
    }
  }, [passengers, booking]);

  const handleIncrementPassenger = () => {
    setPassengers((prev) => prev + 1);
  };

  const handleDecrementPassenger = () => {
    if (passengers > 1) {
      setPassengers((prev) => prev - 1);
    }
  };

  const handleReviewJourneyClick = () => {
    navigate(`review`, { state: { passengers, totalPrice } });
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };

  if (!booking) {
    return (
      <div className="text-center text-lg sm:text-xl text-[#7D5036] py-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#EFEBE0] flex flex-col items-center px-4">      <div className="w-full max-w-screen-lg flex justify-center items-center py-6 sm:py-8">
        <Link to="/bookings">
          <button className="w-full sm:w-auto bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-full px-6 py-2 text-base sm:text-lg md:text-xl font-semibold hover:bg-[#6b432d] transition-colors">
            Back to See More Flights!
          </button>
        </Link>
      </div>

      <div className="w-full max-w-screen-lg bg-white p-6 sm:p-8 md:p-10 border-4 border-[#7D5036] rounded-2xl text-[#7D5036] shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {booking.departureShortForm}
            </h3>
            <h4 className="text-sm sm:text-lg md:text-xl">
              {booking.departureLongForm}
            </h4>
          </div>

          <div className="flex flex-col items-center">
            <PiAirplaneTakeoffLight
              size={40}
              className="sm:size-50 md:size-70"
            />
            <div className="text-lg sm:text-xl md:text-2xl">
              {booking.flightDuration}
            </div>
          </div>

          <div className="text-center sm:text-right">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {booking.arrivalShortForm}
            </h3>
            <h4 className="text-sm sm:text-lg md:text-xl">
              {booking.arrivalLongForm}
            </h4>
          </div>
        </div>
        <div className="border-b-4 border-[#7D5036] mt-4 sm:mt-5"></div>
        <div className="flex justify-center items-center mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          Total Payable Amount: $
          {isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
        </div>
      </div>

      <div className="flex items-center mt-6 sm:mt-8 gap-4">
        <button
          className="rounded-full bg-[#7D5036] text-white p-2 sm:p-3 text-lg sm:text-xl font-bold hover:bg-[#6b432d] transition-colors"
          onClick={handleDecrementPassenger}
        >
          -
        </button>
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {passengers}
        </div>
        <button
          className="rounded-full bg-[#7D5036] text-white p-2 sm:p-3 text-lg sm:text-xl font-bold hover:bg-[#6b432d] transition-colors"
          onClick={handleIncrementPassenger}
        >
          +
        </button>
      </div>

      <div className="w-full max-w-screen-lg flex justify-center items-center py-6 sm:py-8">
        <button
          onClick={handleReviewJourneyClick}
          className="w-full sm:w-auto bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-full px-6 py-2 text-base sm:text-lg md:text-xl font-semibold hover:bg-[#6b432d] transition-colors"
        >
          Review Journey!
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Seat;
