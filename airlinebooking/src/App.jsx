import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Booking from "./components/Booking";
import Bookingd from "./components/Bookingd";
import Seat from "./components/Seat";
import Review from "./components/Review";
import About from "./components/About";

const App = () => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    // Determine the initial state of the navbar based on the current path
    const path = location.pathname;
    if (path.startsWith("/bookings") || path === "/about") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location.pathname]);

  return (
    <div className="font-mainFont">
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/bookings/:id" element={<Bookingd />} />
        <Route path="/bookings/:id/seats" element={<Seat />}>
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
