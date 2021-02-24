
exports.getPost=async(req,res,next)=>{
    try{
        const Post = require('../models/Post')
        const post = await Post.find({})
        return res.json({
            code:200,
            success:true,
            data:post.length !== 0 ? post : "데이터 없음"
        });

    }
    catch(err){
        next(err);
    }
}