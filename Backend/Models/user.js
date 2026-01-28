// models/user.js
const createUser = (db, user, callback) => {
    const { nom, prenom, telephone, email, password } = user;
    const sql = "INSERT INTO user (email, nom, prenom, telephone, password) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [email, nom, prenom, telephone, password], callback);
  };
  
  const getUserByEmailAndPassword = (db, email, password, callback) => {
    const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
    db.query(sql, [email, password], callback);
  };
  
  module.exports = { createUser, getUserByEmailAndPassword };
  