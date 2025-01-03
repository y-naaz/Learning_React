import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import { useNavigate } from "react-router-dom"; // Import useNavigate
// Remove Logout import from here since it's used inside Navbar

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
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Stock Watchlist
        </h2>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Change</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">AAPL</td>
                <td className="px-4 py-2">$150.32</td>
                <td className="px-4 py-2 text-green-500">+1.45%</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">GOOGL</td>
                <td className="px-4 py-2">$2,834.52</td>
                <td className="px-4 py-2 text-red-500">-0.72%</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
