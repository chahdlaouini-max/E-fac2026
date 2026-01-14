// pages/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("logged");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <p>Bienvenue sur votre tableau de bord !</p>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
}

export default Dashboard;

