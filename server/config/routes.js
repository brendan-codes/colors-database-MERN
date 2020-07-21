let colors = require('../controllers/colors');

module.exports = (app) => {

    app.get('/api/colors', colors.index);
    app.get('/api/colors/:id', colors.getOne);
    app.post('/api/colors', colors.create);
    app.delete('/api/colors/:id', colors.delete);
    app.put('/api/colors/:id', colors.update);



}