
exports.getComment=async(req,res,next)=>{
    try{
        const Comment = require('../models/Comment')
        const comment  = await Comment.find({})
        return res.json({
            code:200,
            success:true,
            data: comment.length !== 0 ? comment : "데이터 없음"
        });

    }
    catch(err){
        next(err);
    }
}