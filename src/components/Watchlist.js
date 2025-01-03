import React, { useState, useEffect } from "react";
import StockForm from "./StockForm"; // Import the StockForm component

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([
    { ticker: "AAPL", name: "Apple Inc.", quantity: 10, buyPrice: 150.32 },
    { ticker: "GOOGL", name: "Alphabet Inc.", quantity: 5, buyPrice: 2800.52 },
  ]);
  const [stockToEdit, setStockToEdit] = useState(null); // State to handle the stock being edited

  // Sample data for stock prices and changes
  const [stockData, setStockData] = useState({
    AAPL: { price: 150.32, change: 1.45 },
    GOOGL: { price: 2834.52, change: -0.72 },
  });

  // Simulate dynamic price changes
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prev) => {
        const updatedData = { ...prev };
        Object.keys(updatedData).forEach((stock) => {
          // Random price fluctuation
          const randomFluctuation = (Math.random() - 0.5) * 2; // -1 to +1
          updatedData[stock].price = parseFloat(
            (updatedData[stock].price + randomFluctuation).toFixed(2)
          );
          // Random percentage change
          updatedData[stock].change = parseFloat(
            (randomFluctuation / updatedData[stock].price * 100).toFixed(2)
          );
        });
        return updatedData;
      });
    }, 3000); // Update every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const addOrUpdateStock = (data) => {
    const { name, ticker, quantity, buyPrice } = data;

    if (!stockToEdit) {
      // Add new stock
      const newStock = {
        name,
        ticker: ticker.toUpperCase(),
        quantity: parseFloat(quantity),
        buyPrice: parseFloat(buyPrice),
      };
      setWatchlist([...watchlist, newStock]);
      setStockData((prev) => ({
        ...prev,
        [newStock.ticker]: { price: buyPrice, change: 0 }, // Default price and change
      }));
    } else {
      // Update existing stock
      const updatedWatchlist = watchlist.map(stock =>
        stock.ticker.toUpperCase() === ticker.toUpperCase()
          ? { ...stock, name, quantity: parseFloat(quantity), buyPrice: parseFloat(buyPrice) }
          : stock
      );
      setWatchlist(updatedWatchlist);
      setStockToEdit(null); // Reset edit state
    }
  };

  const removeStock = (ticker) => {
    setWatchlist(watchlist.filter(stock => stock.ticker.toUpperCase() !== ticker.toUpperCase()));
    
    // Optionally, you might want to remove the stock data if it's not needed anymore
    setStockData((prev) => {
      const updatedData = { ...prev };
      delete updatedData[ticker.toUpperCase()];
      return updatedData;
    });
  };

  const editStock = (stock) => {
    setStockToEdit(stock); // Set the stock to edit
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Stock Watchlist</h1>

      {/* Stock Form */}
      <StockForm onSubmit={addOrUpdateStock} initialData={stockToEdit} />

      {/* Watchlist Display */}
      <div className="bg-white shadow rounded-lg p-4">
        {watchlist.length === 0 ? (
          <p className="text-gray-500">No stocks in the watchlist yet.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border-b py-2">Ticker</th>
                <th className="border-b py-2">Name</th>
                <th className="border-b py-2">Quantity</th>
                <th className="border-b py-2">Buy Price</th>
                <th className="border-b py-2">Current Price</th>
                <th className="border-b py-2">Change</th>
                <th className="border-b py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((stock) => (
                <tr key={stock.ticker}>
                  <td className="py-2">{stock.ticker}</td>
                  <td className="py-2">{stock.name}</td>
                  <td className="py-2">{stock.quantity}</td>
                  <td className="py-2">${stock.buyPrice.toFixed(2)}</td>
                  <td className="py-2">
                    ${stockData[stock.ticker]?.price.toFixed(2) || "N/A"}
                  </td>
                  <td
                    className={`py-2 ${
                      stockData[stock.ticker]?.change > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stockData[stock.ticker]?.change > 0 ? "+" : ""}
                    {stockData[stock.ticker]?.change.toFixed(2)}%
                  </td>
                  <td className="py-2">
                    <button
                      onClick={() => editStock(stock)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeStock(stock.ticker)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
