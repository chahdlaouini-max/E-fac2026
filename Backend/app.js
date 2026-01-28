// app.js
import express from "express";
import cors from "cors";
import { createConnection } from "mysql2";


const PORT = 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connexion MySQL
const db = createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "efac",
},
console.log('database connected !')
);

// Test route
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// Serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
