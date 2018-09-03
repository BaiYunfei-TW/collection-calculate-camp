'use strict';

function amount_even(collection) {
  return collection.filter(num => num % 2 === 0).reduce((acc, num) => acc + num);
}

module.exports = amount_even;
