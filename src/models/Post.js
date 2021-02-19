var mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    
    content : String,

    uploaded_Photo : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Photo"
        }
    ],
    
    like_userId : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
    


})
const model = mongoose.model("Post",PostSchema);
module.exports = model;