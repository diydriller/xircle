var mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({

    content : String,
    createdAt : {type:Date , default: Date.now},
    send_userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    recieve_userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


})


const model = mongoose.model("Message",MessageSchema);
module.exports = model;