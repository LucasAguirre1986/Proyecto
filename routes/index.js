const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index.html', { tweets: tweets } );
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  let tweets = tweetBank.list();
  console.log(tweets)
  var list = tweets.find( search => search.name === name );
  
  res.render( 'index', { list: list } );
});

module.exports = router;