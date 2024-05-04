const mongoose = require('mongoose');
const topicSchema = new mongoose.Schema({
    Title : String,
    desc : String,
    category : String,
    email : String,
    date: Date
});
const topicModel = mongoose.model("topic",topicSchema);
module.exports =  topicModel;
