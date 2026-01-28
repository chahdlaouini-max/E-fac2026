// models/facture.js
const createFacture = (db, facture, callback) => {
    const { client, produit, quantite, prix, hajaZeyda, date_facture } = facture;
    const sql = `
      INSERT INTO fac (client, produit, quantite, prix, hajaZeyda, date_facture)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    db.query(sql, [client, produit, quantite, prix, hajaZeyda, date_facture], callback);
  };
  
  const getAllFactures = (db, callback) => {
    const sql = "SELECT * FROM fac ORDER BY id DESC";
    db.query(sql, callback);
  };
  
  module.exports = { createFacture, getAllFactures };
  