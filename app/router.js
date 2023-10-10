const { Router } = require("express");
const router = Router();

const mainController = require("./controllers/mainController");

router.get("/test", mainController.test);

// Si aucune la requête n'est pas géré par le serveur, le router renvoit une 404 avec un message
router.use((req, res) => {
    res.status(404).json("404 - Pas de route gérée par le serveur sur cette adresse");
});

module.exports = router;
