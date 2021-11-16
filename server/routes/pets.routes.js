const PetsController = require("../controllers/pets.controller");

module.exports = function(app) {
  
  // Get All the Pets
  app.get("/api/pets", PetsController.getAllPets);

  // Get One Pet
  app.get("/api/pets/:id", PetsController.getOnePet);

  // Create Pets
  app.post("/api/pets/make", PetsController.createPet);

  // Update Pets
  app.put("/api/pets/:id", PetsController.updatePets);

  // Delete Pets
  app.delete("/api/pets/:id", PetsController.deletePets);

}