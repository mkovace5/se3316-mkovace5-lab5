//review model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DmcaSchema = new Schema({
    songid: {type: String, required: true},
    type: {type: String, required: true},
    user: {type: String, required: true},
    date: {type: Date, required: true},
},{collection:'dmca'});


// Export the model
module.exports = mongoose.model('DMCA', DmcaSchema);