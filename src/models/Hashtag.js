var mongoose = require('mongoose')

const HashtagSchema = new mongoose.Schema({

    title : String,

    userId : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],

    postId : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Post"
        }
    ]
})
const model = mongoose.model("Hashtag",HashtagSchema);
module.exports = model;