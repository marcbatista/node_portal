// var dbConnetion = require('../../config/dbConnection');

module.exports = function(app) {    

    app.get('/noticias', function (req, res) {

        var connection = app.config.dbConnection();

        connection.query('select * from noticia',function(error, result){
             res.render('noticias/noticia', {noticia: result});
          //  res.send(result);
        })       

    });
}
