// app.js
import express from "express";
import cors from "cors";
import mysql from "mysql2";

const PORT = 3000;
const app = express();

// Middleware
app.use(cors()); // Allow requests from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "efac",
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("Erreur connexion MySQL :", err);
    return;
  }
  console.log("MySQL connecté !");
});

// Test route
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

// Export db for use in models
export { db };

