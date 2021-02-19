module.exports = (app)=>{
    const user = require('../controllers/userController');

    app.get('/users',user.getUser);
}