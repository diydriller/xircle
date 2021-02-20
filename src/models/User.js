var mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    
    age : Number, // 나이
    profileUrl : String, // 프로필사진 url 주소
    sex : String, // 성별
    introduction : String, // ex)배부른 개발자
    love : Boolean, // 연애 여부
    description: String, // 자기 소개글 ... (안녕하세요 26살 개발자 어쩌구저쩌구 ,,,,,,,,,,,)
    nickname : String, // ex) @smp_2103 같은 아이디
    email : {type:String,unique:true}, // 인증에 사용할 이메일
    location : String, // 서울특별시 서초구
    university: String, // 연세대학교 , 고려대학교 등
    createdAt : {type:Date , default: Date.now},
    my_hashtags : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Hashtag"
        }
    ], // 관심사 (보내주시면 제가 여기에다가 넣을겁니다)
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