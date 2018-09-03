'use strict';

function choose_even(collection) {
  return collection.filter(num => num % 2 == 0)
}

module.exports = choose_even;
