// require ==================
const express = require('express'); // requiero express
const routes = require('./routes'); // Requiero la hoja js "routes" // Aca agregamos todas las rutas
const nunjucks = require('nunjucks'); // Requiero engine view para renderizar html

const app = express(); // Inicializo express

// Middlewares ==========================
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks

nunjucks.configure('views', { // Configuración propia para la ejecucion de la vista de nunjucks
  autoescape: true,
  express   : app
});

// Routes ================================
app.use(express.static('public')) // Permite redireccionar todas las hojas / img hacia la carpeta public (rutas static )
app.use('/', routes); // Redirecciono todas las rutas hasta la hojas routes/index.js


// Inicio de Server ==================
app.listen(3000, function () { // Levanto el server desde express
    console.log("Se ha iniciado el server")
});

