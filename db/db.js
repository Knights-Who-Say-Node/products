const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/product`);

const recipeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  related: [Number],
  styles: [Object]
});

const product = new mongoose.model('Product', recipeSchema);

module.exports = product;