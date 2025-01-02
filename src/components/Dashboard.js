import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Stock Tracker</h1>
          <nav className="flex space-x-4">
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#watchlist" className="text-gray-600 hover:text-gray-900">Watchlist</a>
            <a href="#logout" className="text-gray-600 hover:text-gray-900">Logout</a>
          </nav>
        </div>
      </header>

      {/* Portfolio Summary */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Total Portfolio Value</h2>
            <p className="text-2xl font-bold text-green-500">$15,300.45</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">Daily Change</h2>
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
        <h2 className="text-xl font-bold text-gray-800 mb-4">Stock Watchlist</h2>
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
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">GOOGL</td>
                <td className="px-4 py-2">$2,834.52</td>
                <td className="px-4 py-2 text-red-500">-0.72%</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">View</button>
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
            <h3 className="text-lg font-bold text-gray-700">Breaking News: Market Rally</h3>
            <p className="text-sm text-gray-600 mt-2">
              Stocks surged today with tech leading the way...
            </p>
            <a href="#readmore" className="text-blue-500 hover:underline mt-4 block">Read more</a>
          </article>
          {/* Add more news articles */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
