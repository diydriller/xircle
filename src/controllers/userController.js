exports.getUser = async (req, res, next) => {
    var User = require('../models/User')
    try {
        const user = await User.find({})
        return res.json({
            code: 200,
            success: true,
            data: user.length !== 0 ? user : "데이터없음"
        });

    } catch (err) {
        next(err);
    }
}

// 회원가입

exports.postJoin = async (req, res, next) => {
    const {
        body: {
            age,
            sex : gender,
            job,
            adj,
            university,
            profileUrl : profileImgSrc,
            introduction : introText,
            nickname : displayName,
            email,
            location,
            myHashtags : interestArr,
            instagramId,
            articleImgSrc,
            articleText,
        },
    } = req;
    const User = require('../models/User')
    const dotenv = require('dotenv')
    const bcrypt = require('bcrypt')
    const nodemailer = require('nodemailer')
    dotenv.config();
    const jwt = require('jsonwebtoken')

    const webMails = ["snu.ac.kr","korea.ac.kr","yonsei.ac.kr","skku.edu","sogang.ac.kr","hanyang.ac.kr"]

    try {
        const user = await User({
            age,
            sex : gender,
            job,
            adj,
            university,
            profileUrl : profileImgSrc,
            introduction : introText,
            nickname : displayName,
            email,
            location,
            myHashtags : interestArr,
            instagramId,
            articleImgSrc,
            articleText,
        })


        // 이메일인증
        if(webMails.includes(email.split("@")[1])){
        // 이메일이 존재하는경우
            User.register(user,email)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.GOOGLE_ACCOUNT,
                    pass: process.env.GOOGLE_PASSWORD
                }
                });
                
            var mailOptions = {
            from: 'qkr5882103@gmail.com',
            to: `${email}`,
            subject: '연고링',
            text: `html 템플릿`  // 보낼 html 템플릿
            };
                
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error)
                res.send({
                    code:404,
                    success: false,
                    message: error
                })
            } else {
                // 이메일 전송 성공
                console.log('Email sent: ' + info.response);
                
            }
            });

    }
} catch(error) {
        res.json({
            code:400,
            success:false,
            data: `${error}`
        })
    }
}



exports.postLogin = async (req, res, next) => {
    const passport = require('passport')
    
    try{
        passport.authenticate('jwt',{session:false}, (passportError, user, info) => {
			// 인증이 실패했거나 유저 데이터가 없다면 에러 발생
      if (passportError || !user) {
        console.log(passportError,info)
        res.json({message:'error'})
        return;
      }
			// user데이터를 통해 로그인 진행
      req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          res.send(loginError);
          return;
        }
      })
      
      res.send({
          code:200,
          success: true,
          data: "successfully authorized"
      })
    })(req, res);
    }catch(error){
        console.error(error);
        next(error);
    }

}

exports.createToken = async (req,res,next) => {
    const jwt = require('jsonwebtoken')
    try{
        const token = jwt.sign(
            { id: user.id, name: user.name, auth: user.auth },
            'jwt-secret-key'
        );
        res.send({
            code:200,
            success: true,
            tokenId: token
        })
    }catch(error){

    }
}

    


    
