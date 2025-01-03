import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "<span style='color: #FFD700;'>Confirm Logout</span>",
      html: "<p style='color: #d1d5db; font-size: 16px;'>Are you sure you want to log out of your account?</p>",
      icon: "warning",
      background: "#1f2937", // Dark background to match your theme
      color: "#ffffff", // White text
      showCancelButton: true,
      confirmButtonColor: "#f59e0b", // Yellow (matches hover effect)
      cancelButtonColor: "#ef4444", // Red (for cancel)
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
      customClass: {
        popup: "rounded-lg shadow-lg",
        confirmButton: "text-white font-bold py-2 px-4 rounded",
        cancelButton: "text-white font-bold py-2 px-4 rounded",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "<span style='color: #4ade80;'>Logged Out!</span>",
          html: "<p style='color: #d1d5db; font-size: 16px;'>You have been logged out successfully.</p>",
          icon: "success",
          background: "#1f2937",
          color: "#ffffff",
          confirmButtonColor: "#f59e0b",
          confirmButtonText: "OK",
          customClass: {
            popup: "rounded-lg shadow-lg",
            confirmButton: "text-white font-bold py-2 px-4 rounded",
          },
        });
        navigate("/login"); // Redirect to the login page
      }
    });
  };
  

  return (
    <button
      onClick={handleLogout}
      className="relative group text-gray-300 hover:text-red-500 transition duration-300"
    >
      Logout
      <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></div>
    </button>
  );
};

export default Logout;
