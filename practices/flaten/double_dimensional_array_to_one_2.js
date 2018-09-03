'use strict';
var to_one = require('./double_dimensional_array_to_one_1.js')

function double_to_one(collection) {
  let arr = to_one(collection);
  return arr.filter((e, i) => arr.indexOf(e) == i)
}

module.exports = double_to_one;
