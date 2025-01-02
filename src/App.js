import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />  
      </Routes>
    </Router>
  );
}

export default App;

