
exports.getUser=async(req,res,next)=>{
    var User = require('../models/User')
    try{
        const user = await User.find({})
        return res.json({
            code:200,
            success:true,
            message: user.length !== 0 ? user : "데이터없음"
        });

    }
    catch(err){
        next(err);
    }
}