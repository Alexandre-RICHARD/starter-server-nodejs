import {Request, Response} from "express";
import {Router as createRouter} from "express";
import mainController from "./controllers/mainController";
const router = createRouter();

router.get("/test", mainController.test);

// Si aucune la requête n'est pas géré par le serveur,
// le router renvoit une 404 avec un message
router.use((_req: Request, res: Response): void => {
    res.status(404).json(
        "404 - Pas de route gérée par le serveur sur cette adresse"
    );
});

export default router;
