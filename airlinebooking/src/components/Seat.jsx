import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";

const Seat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

 const fetchBookingData = () => {
  const api = "https://mocki.io/v1/c6bacf30-a2fe-4449-a508-f26c7978139d";
  axios
    .get(api)
    .then((response) => {
      const bookingData = response.data.find(
        (item) => item.id.toString() === id
      );
      if (bookingData) {
        bookingData.price = parseFloat(bookingData.price.replace(/[^\d.-]/g, '')); // Removing non-numeric characters .. (pela aya👉parseFloat(bookingData.price.replace("$", "")) aa line hati... mrans agal thi $ nikli jai string mathi float ma convert karva mate..je replace methode na use thi thai

        setBooking(bookingData);
        // setTotalPrice(bookingData.price * passengers); // Initial calculation on data fetch
      } else {
        console.error("Booking not found for id:", id);
      }
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
};

  useEffect(() => {
    fetchBookingData();
  }, [id]);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#EFEBE0] flex flex-col items-center">
      <div className="flex justify-center items-center mt-10">
        <Link to={"/bookings"}>
          <button className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2 text-xl">
            Back to See More flights!
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
        <div className="border-b-4 border-[#7D5036] mt-5"></div>
        <div className="flex items-center justify-center mt-8 text-4xl">
          total payable amount : $
          {isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
        </div>
      </div>

      <div className="flex items-center mt-10">
        <div
          className="rounded-full bg-[#7D5036] text-white p-3 mr-4 cursor-pointer"
          onClick={handleDecrementPassenger}
        >
          -
        </div>
        <div className="text-3xl">{passengers}</div>
        <div
          className="rounded-full bg-[#7D5036] text-white p-3 ml-4 cursor-pointer"
          onClick={handleIncrementPassenger}
        >
          +
        </div>
      </div>

      <div className="mt-10">
        <button
          onClick={handleReviewJourneyClick}
          className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2 text-xl"
        >
          Review Journey!
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Seat;
