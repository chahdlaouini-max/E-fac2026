// controllers/factureController.js
const { createFacture, getAllFactures } = require("../models/facture");

const addFacture = (req, res, db) => {
  const { client, produit, quantite, prix, hajaZeyda, date_facture } = req.body;

  createFacture(db, { client, produit, quantite, prix, hajaZeyda, date_facture }, (err) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });

    res.json({ message: "Facture enregistrée avec succès !" });
  });
};

const listFactures = (req, res, db) => {
  getAllFactures(db, (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });

    res.json(results);
  });
};

module.exports = { addFacture, listFactures };
