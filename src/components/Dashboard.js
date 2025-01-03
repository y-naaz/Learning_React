import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import Watchlist from "./Watchlist"; // Import the Watchlist component
import { useNavigate } from "react-router-dom"; // Import useNavigate

const texts = ["Stock", "Invest", "Portfolio", "TrackPORT"];

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoText, setLogoText] = useState("TrackPORT");
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); // This is passed to Navbar

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(false); // Fade out current text
      setTimeout(() => {
        setLogoText(texts[index]);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Cycle to next text
        setIsTextVisible(true); // Fade in new text
      }, 1500); // Wait for the fade-out before changing the text
    }, 3000); // Change text after 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [index]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar
        logoText={logoText}
        isTextVisible={isTextVisible}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        navigate={navigate} // Pass navigate prop to Navbar
      />

      {/* Portfolio Summary */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Portfolio Value
            </h2>
            <p className="text-2xl font-bold text-green-500">$15,300.45</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">
              Daily Change
            </h2>
            <p className="text-2xl font-bold text-red-500">-2.14%</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Top Stock</h2>
            <p className="text-2xl font-bold text-gray-800">AAPL (+3.21%)</p>
          </div>
        </div>
      </section>

      {/* Watchlist */}
      <section className="container mx-auto px-4 py-3">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          
        </h2>
        <Watchlist />
      </section>

      {/* News */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Market News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-bold text-gray-700">
              Breaking News: Market Rally
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Stocks surged today with tech leading the way...
            </p>
            <a
              href="#readmore"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more
            </a>
          </article>
          {/* Add more news articles */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
