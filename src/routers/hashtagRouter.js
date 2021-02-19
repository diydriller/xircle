module.exports = (app)=>{
    const hashtag = require('../controllers/hashtagController');

    app.get('/hashtags',hashtag.getHashtag);
}