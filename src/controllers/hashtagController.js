
exports.getHashtag=async(req,res,next)=>{
    try{
        const Hashtag = require('../models/Hashtag')
        const hashtag = await Hashtag.find({})
        return res.json({
            code:200,
            success:true,
            message: hashtag.length !== 0 ?  hashtag : "데이터 없음"
        });

    }
    catch(err){
        next(err);
    }
}