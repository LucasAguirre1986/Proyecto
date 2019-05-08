// require ==========
const express = require('express');
const  app = express();



// midleware ====



// router
app.get('/', function(req, res) {
     // hace en funcion de la url
     res.send("Hello World!");
})

app.get('/search', function(req, res) {
    // hace en funcion de la url
    res.send("entraste a search");
})




// iniciar el server

app.listen(3000, function(){
    console.log(`Listening on port 300  0`)
});
