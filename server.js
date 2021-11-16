const express = require("express");
const cors = require('cors');
const app = express();

require("./server/config/config");

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));


require('./server/routes/pets.routes')(app); // This is new

app.listen(8000, () => console.log("The server is all fired up on port 8000"));