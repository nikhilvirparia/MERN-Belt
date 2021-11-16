const { Pet } = require('../models/pets.model');

// Create New Pet
module.exports.createPet = (req, res) => {
    const { name, type, description, skill1, skill2, skill3 } = req.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
    })
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
};

// Get All Pets
module.exports.getAllPets = (req, res) => {
    Pet.find({}).sort("type").exec()
        .then(allPets => res.json(allPets))
        .catch(err => res.json(err))
  };


// Get one Pet
module.exports.getOnePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
        .then(onePet => res.json(onePet))
        .catch(err => res.json(err))
};

// Update Pets
module.exports.updatePets = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPets => res.json(updatedPets))
        .catch(err => res.json(err))
}

// Delete Pets
module.exports.deletePets= (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}