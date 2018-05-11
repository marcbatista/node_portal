var dbConnetion = require('../../config/dbConnection');

module.exports = function(express) {

    var connection = dbConnetion();

    express.get('/noticias', function (req, res) {

        connection.query('select * from noticia',function(error, result){
             res.render('noticias/noticia', {noticia: result});
          //  res.send(result);
        })       

    });
}
