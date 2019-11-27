const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true},
});

let SongSchema = new Schema({
	title: {type: String, required: true},
	artist: {type: String, required: true},
	genre: {type: String, required: true},
	year: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Song', SongSchema);