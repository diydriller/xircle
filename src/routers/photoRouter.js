module.exports = (app)=>{
    const photo = require('../controllers/photoController');

    app.get('/photos',photo.getPhoto);
}