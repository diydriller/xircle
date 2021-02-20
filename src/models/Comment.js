var mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    createdAt : {type:Date , default: Date.now},
    content : String,

    postId : {
        type: mongoose.Schema.Types.ObjectId, ref: "Post"
    },

    like_userId : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})
const model = mongoose.model("Comment",CommentSchema);
module.exports = model;