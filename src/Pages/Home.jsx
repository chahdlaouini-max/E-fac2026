// pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bienvenue sur l'accueil</h1>
      <Link to="/login">
        <button>Aller à Login</button>
      </Link>
    </div>
    
  );
}

export default Home;

