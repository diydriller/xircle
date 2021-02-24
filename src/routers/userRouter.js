module.exports = (app)=>{
    const user = require('../controllers/userController');

    app.get('/users',user.getUser);
    app.post('/login',user.postJoin);
}