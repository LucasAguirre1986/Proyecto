const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const routes = require('./routes');

app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

app.use(express.static('public')) // redirecciona a public rutas static
app.use('/', routes);


app.listen(3001, function () {
    console.log("Se ha iniciado el server")
});

