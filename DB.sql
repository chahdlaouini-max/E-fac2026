CREATE DATABASE efac;

USE efac;

CREATE TABLE admin (
    idAdmin INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE user (
    idUser INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(100),
    nom VARCHAR(100),
    prenom VARCHAR(100),
    telephone VARCHAR(15),
    idAdmin INT,
    FOREIGN KEY (idAdmin) REFERENCES admin(idAdmin)
);

CREATE TABLE fac (
    idFac INT AUTO_INCREMENT PRIMARY KEY,
    client VARCHAR(100),
    produit VARCHAR(100),
    quantite INT,
    prix DECIMAL(12,3),
    dateFac DATE, 
    idAdmin INT,
    idUser INT,
    FOREIGN KEY (idAdmin) REFERENCES admin(idAdmin),
    FOREIGN KEY (idUser) REFERENCES user(idUser)
);
