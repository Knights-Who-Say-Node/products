const express = require("express");
const app = express();
const Product = require('../db/db.js');

app.use(express.json());
app.use(express.static(__dirname));

app.get('/products/*/styles', (req, res) => {
  var id = '';
  for (var i = req.url.length - 8; i > 0; i--) {
    if (req.url.charAt(i) !== '/') {
      id = req.url.charAt(i) + id;
    } else {
      break;
    }
  }
  Product.find({id: id})
  .then((results) => {
    res.status(200).send(results[0].styles[0].styles);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})
app.get('/products/*', (req, res) => {
  var id = '';
  for (var i = req.url.length - 1; i > 0; i--) {
    if (req.url.charAt(i) !== '/') {
      id = req.url.charAt(i) + id;
    } else {
      break;
    }
  }
  Product.find({id: id})
  .then((results) => {
    res.status(200).send(results);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})

app.listen(3000);
console.log(`Server listening at http://localhost:3000`);