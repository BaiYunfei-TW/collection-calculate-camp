'use strict';

function find_last_even(collection) {
  return collection.reduce((even, num) => num % 2 == 0 ? num : even);
}

module.exports = find_last_even;
