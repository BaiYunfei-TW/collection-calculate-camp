'use strict';

function find_first_even(collection) {
  return collection.reduce((even, num) => (even == null && num % 2 == 0) ? num : even , null);
}

module.exports = find_first_even;
