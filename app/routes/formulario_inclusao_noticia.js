module.exports = function(express) {
    express.get('/formulario_inclusao_noticia', function (req, res) {

        res.render('admin/form_add_noticia');

    });
}