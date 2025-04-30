import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { PiAirplaneTakeoffLight } from "react-icons/pi";

const Review = () => {
  const { id } = useParams();
  const location = useLocation();
  const { passengers, totalPrice } = location.state || {
    passengers: 1,
    totalPrice: 0,
  };
  const [booking, setBooking] = useState(null);

  const reviewRef = useRef(null);

  const data = () => {
    const api = "https://mocki.io/v1/c6bacf30-a2fe-4449-a508-f26c7978139d";
    axios
      .get(api)
      .then((response) => {
        const bookingData = response.data.find(
          (item) => item.id.toString() === id
        );
        if (bookingData) {
          bookingData.price = parseFloat(bookingData.price.replace("$", ""));
          setBooking(bookingData);
        }
      })
      .catch((err) => {
        console.error("Error fetching data for review:", err);
      });
  };

  useEffect(() => {
    data();
  }, [id]);

  useEffect(() => {
    if (booking) {
      reviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [booking]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div
      ref={reviewRef}
      className="w-full min-h-screen bg-[#EFEBE0] flex flex-col items-center mt-[25%]"
    >
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
        </div>

        <div className="flex justify-between mt-10">
          <div className="text-center">
            <h5 className="text-xl">airline</h5>
            <p className="text-2xl">{booking.airline}</p>
          </div>

          <div className="text-center">
            <h5 className="text-xl">Flight NO</h5>
            <p className="text-2xl">{booking.flightNumber}</p>
          </div>

          <div className="text-center">
            <h5 className="text-xl">seat Number</h5>
            <p className="text-2xl">{booking.seatNumber}</p>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="text-center">
            <h5 className="text-xl">departure Time</h5>
            <p className="text-2xl">{booking.departureTime}</p>
          </div>

          <div className="text-center">
            <h5 className="text-xl">Boarding Time</h5>
            <p className="text-2xl">{booking.boardingTime}</p>
          </div>

          <div className="text-center">
            <h5 className="text-xl">arrival Time</h5>
            <p className="text-2xl">{booking.arrivalTime}</p>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div className="text-center text-xl">
            <h5 className="text-lg"> total passenger</h5>
            <p className="text-2xl">{passengers}</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl">Class</h5>
            <p className="text-2xl">{booking.class}</p>
          </div>
        </div>

        <div className="border-b-4 border-[#7D5036] mt-5"></div>
        <div className="flex items-center justify-center mt-8 text-4xl">
          total payable amount : $
          {isNaN(totalPrice) ? "0.00" : totalPrice.toFixed(2)}
        </div>
      </div>

      <div className="mt-10">
        <Link to={`/`}>
          <button className="bg-[#7D5036] text-[#EFEBE0] border-4 border-black rounded-[25px] p-2 text-xl">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;
