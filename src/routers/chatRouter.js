module.exports = (app)=>{
    const chat = require('../controllers/chatController');

    app.get('/chat',chat.getChat);
}