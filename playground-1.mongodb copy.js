/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('product');

var related = db.getCollection('related').find().toArray();

var prodRelated = [];
var currentProduct = 1;
for (var i = 0; i < styles.length; i++) {
  if (related[i].current_product_id === currentProduct) {
    prodRelated.push(related[i].related_product_id);
  } else {
    db.products.updateOne(
      {id: related[i].current_product_id - 1},
      {
        $set: { styles: prodRelated }
      }
    )
    prodRelated = [];
    currentProduct++
    i--;
  }
}