//app.js

const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const song = require('./routes/user.route'); // Imports routes for the products
const app = express();
const cors = require('cors');

const uri = 'mongodb+srv://mkovace5:123Lozinka321@gettingstarted-lllun.mongodb.net/music?retryWrites=true&w=majority';


// Set up mongoose connection
const mongoose = require('mongoose');

mongoose.connect(uri, {
	useNewUrlParser: true,
});

const db = mongoose.connection;



console.log('Connected to the database (mongoose)')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/songs', song);
app.use("/mina", express.static('FrontEnd'));
app.use(cors());


let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});



