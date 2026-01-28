// controllers/userController.js
const { createUser, getUserByEmail } = require("../models/user");

const register = (req, res, db) => {
  const { nom, prenom, telephone, email, password } = req.body;

  createUser(db, { nom, prenom, telephone, email, password }, (err) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Cet email existe déjà" });
      }
      return res.status(500).json({ message: "Erreur serveur" });
    }
    res.json({ message: "Inscription réussie !" });
  });
};

const login = (req, res, db) => {
  const { email, password } = req.body;
  getUserByEmail(db, email, (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });
    if (results.length > 0 && results[0].password === password) {
      res.json({ message: "Connexion réussie !" });
    } else {
      res.status(401).json({ message: "Email ou mot de passe incorrect" });
    }
  });
};

module.exports = { register, login };
