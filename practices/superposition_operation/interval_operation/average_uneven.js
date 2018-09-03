'use strict';

function average_uneven(collection) {
  let odds = collection.filter(num => num % 2 === 1);
  return odds.reduce((acc, num) => acc + num) / odds.length;
}

module.exports = average_uneven;
