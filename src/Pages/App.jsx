// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import Home from "./Home.jsx";
import LoginForm from "./LoginForm.jsx";
import Dashboard from "./Dashboard.jsx";
import Test from "../components/Test.jsx";
import Inscription from "../components/Inscription.jsx";
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
      <Route path="/test" element={<Test />} />
      <Route path="/register" element={<Inscription />} />
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

