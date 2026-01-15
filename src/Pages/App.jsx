// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Home from "./Home.jsx";
import LoginForm from "./LoginForm.jsx";
import Dashboard from "./Dashboard.jsx";

function App() {
  
  const logged = localStorage.getItem("logged"); 
  const ProtectedRoute = ({ children }) => {
    if (!logged) {
      return <Navigate to="/login" />; 
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute> 
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

