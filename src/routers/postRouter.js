module.exports = (app)=>{
    const post = require('../controllers/postController');

    app.get('/posts',post.getPost);
}