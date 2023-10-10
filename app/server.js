// On importe dotenv pour utiliser les variables d'environnement
require("dotenv").config();
// On importe express, notre créateur de serveur
const express = require("express");
// On importe notre port depuis le .env
const PORT = process.env.LOCAL_PORT;
// On importe notre router
const router = require("./router");
// Utilisation de CORS pour l'origine des requêtes
const cors = require("cors");
// On créé app avec express
const app = express();

// Application de CORS
app.use(cors());
// Utilisation de la Jsonification pour les réponse de requêtes
app.use(express.json());
// Notre app utilisé le router
app.use(router);

// On démarre notre app
const start = () =>
    app.listen(PORT || 3000, () => {
        console.log("Serveur fonctionnel");
    });

module.exports = {
    start,
};
