const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SongSchema = new Schema({
    title: {type: String, required: true, max: 30},
    artist: {type: String, required: true, max: 30},
    album: {type: String, required: true, max: 30},
    year: {type: String, required: true, max: 4},
    genre: {type: String, required: true}
} {});

// Export the model
module.exports = mongoose.model('Song', SongSchema);
