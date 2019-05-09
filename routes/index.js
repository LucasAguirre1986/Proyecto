const express = require('express'); // Requiero express
const router = express.Router(); // Utilizo un metodo dentro de express "Router",
// Esto permite rotear las url desde este archivo, y no desde el principal..

var bodyParser = require('body-parser'); // Requiero body-parser. Ésto permite "parsear", el string que recibo del post y convertirlo en objeto.
const tweetBank = require('../tweetBank'); // requiero la hoja "js" que posee las funciones de add
const bodyParserUrlCoded = bodyParser.urlencoded({ extended: false })


router.get('/', function (req, res) { // Si el usuario ingresa en la raiz (http://localhost:3000/) realiza lo siguiente:
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } ); // Modifico para que envie showForm con valor true.(Formulario)
});

router.get('/users/:name', function (req, res) { // ruta dinamica, toma la url http://localhost:3000/users/<valor>
  var name = req.params.name;
  let tweets = tweetBank.list();
  console.log(tweets)
  var list = tweets.find( search => search.name === name );
  
  res.render( 'index', { list: list } );
});

router.post('/tweets', bodyParserUrlCoded, function(req, res) { // utilizo post para recibir el metodo y agregar un nuevo push a tweetBank.add
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/'); // luego que lo ingresa, direcciona la web hasta la pagina principal (raiz)
});

module.exports = router;