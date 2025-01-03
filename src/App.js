import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/Dashboard";
import MarketNews from "./components/MarketNews";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />  
      <Route path="/market-news" element={<MarketNews />} />
      </Routes>
    </Router>
  );
}

export default App;

