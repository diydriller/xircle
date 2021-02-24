
exports.getPhoto=async(req,res,next)=>{
    try{
        const Photo = require('../models/Photo')
        const photo = await Photo.find({})
        return res.json({
            code:200,
            success:true,
            data:photo.length !== 0 ? photo : "데이터 없음"
        });

    }
    catch(err){
        next(err);
    }
}