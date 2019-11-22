//review model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    song: {type: String, required: true, max: 100},
    reviews: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Review', ReviewSchema);