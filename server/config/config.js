const mongoose = require("mongoose");
mongoose.set('runValidators', true);

mongoose.connect('mongodb://localhost/petsdb', {   
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });