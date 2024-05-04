const mongoose = require('mongoose');
const ansSchema = new mongoose.Schema({
    id : String,
    desc : String,
    email : String,
    date: Date
});
const ansModel = mongoose.model("Solution",ansSchema);
module.exports =  ansModel;
