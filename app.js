var express = require('./config/server');

// var rotaNoticias = require('./app/routes/noticias');
// rotaNoticias(express);

// var rotaHome = require('./app/routes/home');
// rotaHome(express);




express.listen(3000, function () {

    console.log('Servidor ON');

    console.log('tudo pronto bixo !!!');

})
