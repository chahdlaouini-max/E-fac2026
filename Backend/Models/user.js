// models/user.js
const getUserByEmail = (db, email, callback) => {
  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], callback);
};

const createUser = (db, user, callback) => {
  const { nom, prenom, telephone, email, password } = user;
  const sql = "INSERT INTO user (email, nom, prenom, telephone, password) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [email, nom, prenom, telephone, password], callback);
};
module.exports = { getUserByEmail, createUser };
