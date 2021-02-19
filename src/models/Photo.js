var mongoose = require('mongoose')

const PhotoSchema = new mongoose.Schema({
    fileUrl : {
        type : String,
        required : "File URL is required",
    }
})
const model = mongoose.model("Photo",PhotoSchema);
module.exports = model;