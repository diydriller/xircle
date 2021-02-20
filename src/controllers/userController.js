exports.getUser = async (req, res, next) => {
    var User = require('../models/User')
    try {
        const user = await User.find({})
        return res.json({
            code: 200,
            success: true,
            message: user.length !== 0 ? user : "데이터없음"
        });

    } catch (err) {
        next(err);
    }
}

exports.postLogin = async (req, res, next) => {
    const {
        body: {
            age,
            sex,
            university,
            description,
            profileUrl,
            introduction,
            personaility,
            love,
            nickname,
            email,
            location,
            my_hashtags,
            firstPostImage,
            firstPostDescription,
        }
    } = req;

    const webMails = ["snu.ac.kr","korea.ac.kr","yonsei.ac.kr","skku.edu","sogang.ac.kr","hanyang.ac.kr"]
    try {
        // 이메일인증
        if(webMails.includes(userEmail.split("@")[1])){
            console.log("이메일검증완료")
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'smp2103@yonsei.ac.kr',
                    pass: '960529hh@@'
                }
                });
                
            var mailOptions = {
            from: 'smp2103@yonsei.ac.kr',
            to: `${email}`,
            subject: '연고링',
            text: `html 템플릿`  // 보낼 html 템플릿
            };
                
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.send(400,{
                    message: "오류"
                })
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
    }
} catch(err) {
        
    }
}