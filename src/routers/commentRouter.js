module.exports = (app)=>{
    const comment = require('../controllers/commentController');

    app.get('/comments',comment.getComment);
}