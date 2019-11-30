//review model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReviewSchema = new Schema({
    songid: {type: String, required: true},
    rating: {type: Number, required: true, max: 5},
    reviews: {type: String, required: true},
},{collection:'reviews'});


// Export the model
module.exports = mongoose.model('Review', ReviewSchema);