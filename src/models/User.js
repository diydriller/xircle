var mongoose = require('mongoose')
var passportLocalMongoose = require('passport-local-mongoose')


const UserSchema = new mongoose.Schema({
    
    age : Number, 
    profileUrl : String, 
    sex : Number, 
    introduction : String, 
    love : Boolean, 
    description: String, 
    nickname : {type:String, unique:true}, 
    email : {type:String,unique:true}, 
    location : String, 
    latitude : Number,
    longitude : Number,
    password: String,
    university: String,
    instagramId : String,
    createdAt : {type:Date , default: Date.now},
    myHashtags : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Hashtag"
        }
    ], // 관심사 (보내주시면 제가 여기에다가 넣을겁니다)
    mainHashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Hashtag"
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
    isOpen: Number

    
})
UserSchema.plugin(passportLocalMongoose,{
    usernameField:'email'
});

const model = mongoose.model("User",UserSchema);

module.exports = model;