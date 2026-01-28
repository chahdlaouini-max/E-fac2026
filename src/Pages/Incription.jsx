import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PageInscription.css"; // IMPORT YOUR FULL CSS

export default function Inscription() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    prenom: "",
    nom: "",
    tel: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const verifierInformations = (e) => {
    e.preventDefault();
    let newErrors = {};

    const regexMail = /^[a-zA-Z0-9][a-zA-Z0-9._+]{0,63}@(gmail|yahoo|outlook)\.(com|fr|tn)$/;
    const regexNom = /^[a-zA-Z]+$/;

    if (!form.email) newErrors.email = "Veuillez taper un email!";
    else if (!regexMail.test(form.email)) newErrors.email = "Email incorrect!";

    if (!form.prenom) newErrors.prenom = "Prénom incorrect!";
    else if (!regexNom.test(form.prenom)) newErrors.prenom = "Prénom incorrect!";

    if (!form.nom) newErrors.nom = "Nom incorrect!";
    else if (!regexNom.test(form.nom)) newErrors.nom = "Nom incorrect!";

    if (!form.tel) newErrors.tel = "Veuillez taper un numero de telephone";
    else if (form.tel.length !== 8) newErrors.tel = "Numero incorrect";

    if (!form.password) newErrors.password = "Veuillez taper un mot de passe!";
    if (!form.confirmPassword) newErrors.confirmPassword = "Veuillez retaper le mot de passe!";
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas!";

    let users = JSON.parse(localStorage.getItem("users")) || {};
    if (users[form.email]) newErrors.email = "Cet email est déjà utilisé!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    users[form.email] = {
      prenom: form.prenom,
      nom: form.nom,
      tel: form.tel,
      password: form.password
    };

    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription réussie !");
    navigate("/login");
  };

  return (
    <form className="signup-form" onSubmit={verifierInformations}>
      <img src="image001.png" alt="" id="Img1" />
      <h2>Inscription</h2>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="Class1"
          placeholder="Email@fake.com"
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <table>
          <tbody>
            <tr>
              <td>
                <label>Prenom</label>
                <input
                  type="text"
                  name="prenom"
                  className="Class2"
                  onChange={handleChange}
                />
                <span>{errors.prenom}</span>
              </td>

              <td>
                <label>Nom</label>
                <input
                  type="text"
                  name="nom"
                  className="Class2"
                  onChange={handleChange}
                />
                <span>{errors.nom}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <label>Telephone</label>
        <input
          type="tel"
          name="tel"
          className="Class1"
          onChange={handleChange}
          placeholder="XX XXX XXX"

        />
        <span>{errors.tel}</span>

        <label>Mot de passe</label>
        <input
          type="password"
          name="password"
          className="Class1"
          onChange={handleChange}
          placeholder="******"
        />
        <span>{errors.password}</span>

        <label>Confirmation</label>
        <input
          type="password"
          name="confirmPassword"
          className="Class1"
          onChange={handleChange}
          placeholder="******"

        />
        <span>{errors.confirmPassword}</span>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
}
