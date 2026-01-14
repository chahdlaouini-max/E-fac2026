// LoginForm.jsx
import React, { useState } from "react";
import "./LoginForm.css"; // ton CSS existant

const LoginForm = () => {
  // State pour les inputs et les messages d'erreur
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // Fonction de validation
  const verifierInformations = () => {
    let isValid = true;
    setErrorEmail("");
    setErrorPassword("");

    if (email.trim() === "") {
      setErrorEmail("Veuillez taper un email!");
      isValid = false;
    } else {
      const regex =
        /^[a-zA-Z0-9][a-zA-Z0-9._+]{0,63}@(gmail|yahoo|outlook)\.(com|fr|tn)$/;
      if (!regex.test(email)) {
        setErrorEmail("Format d'email incorrect!");
        isValid = false;
      }
    }

    if (password.trim() === "") {
      setErrorPassword("Veuillez taper un mot de passe!");
      isValid = false;
    }

    return isValid;
  };

  // Fonction de soumission
  const handleSubmit = (e) => {
    e.preventDefault(); // empêcher le rechargement de la page

    if (!verifierInformations()) return;

    // Récupérer les utilisateurs depuis localStorage
    let users = localStorage.getItem("users");
    if (!users) {
      alert("Aucun utilisateur enregistré!");
      return;
    }

    users = JSON.parse(users); // tableau d'objets [{email, password}, ...]

    // Chercher l'utilisateur par email
    const utilisateur = users.find((u) => u.email === email);

    if (!utilisateur) {
      alert("Email non trouvé!");
      return;
    }

    if (utilisateur.password !== password) {
      alert("Mot de passe invalide!");
      return;
    }

    alert("Connexion réussie!");
    // Ici tu peux rediriger vers une autre page avec React Router
    // ex: navigate("/valid");
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <img src="image001.png" alt="" id="Img1" />
      <h2>Connexion</h2>

      <div className="mb-3">
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email@fake.com"
        />
        {errorEmail && (
          <div
            style={{ color: "#d80000", fontSize: "15px", marginLeft: "5px" }}
          >
            {errorEmail}
          </div>
        )}

        <label htmlFor="Password">Mot de passe</label>
        <input
          type="password"
          id="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*******"
        />
        {errorPassword && (
          <div
            style={{ color: "#d80000", fontSize: "15px", marginLeft: "5px" }}
          >
            {errorPassword}
          </div>
        )}
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default LoginForm;