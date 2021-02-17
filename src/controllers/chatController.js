
exports.getChat=async(req,res,next)=>{
    try{

        return res.json({
            code:200,
            success:true,
            message:'채팅 조회 성공'
        });

    }
    catch(err){
        next(err);
    }
}