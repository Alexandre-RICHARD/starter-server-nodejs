// On importe express, notre créateur de serveur
import express, {Express} from "express";
// Utilisation de CORS pour l'origine des requêtes
import cors from "cors";
// On importe notre router
import router from "./router";
// On importe dotenv pour utiliser les variables d'environnement
import dotenv from "dotenv";
dotenv.config();
// On importe notre port depuis le .env
const PORT = process.env.LOCAL_PORT;
// On créé app avec express
const app: Express = express();

// Application de CORS
app.use(cors());
// Utilisation de la Jsonification pour les réponse de requêtes
app.use(express.json());
// Notre app utilisé le router
app.use(router);

// On démarre notre app
const start = () => app.listen(PORT, (): void => {
    console.log(`Server works on http://localhost:${PORT}`);
});

export default start;
