var mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    
    age : Number,
    sex : String,
    introduction : String,
    personality : String,
    love : Boolean,
    nickname : String,
    email : {type:String,unique:true},
    location : [],
    my_hashtags : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Hashtag"
        }
    ],
    main_hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Hashtag"
        }
    ],

    photos : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Photo"
        }
    ],

    following :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    followers : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ]

    
})
const model = mongoose.model("User",UserSchema);

module.exports = model;