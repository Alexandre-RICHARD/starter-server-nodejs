const mainController = {
  
  test: async (req, res) => {
    try {
      res.json("Le serveur fonctionne");
    } catch (error) {
      console.trace(error);
      res.status(200).json(error);
    }
  },
  
};
  
module.exports = mainController;