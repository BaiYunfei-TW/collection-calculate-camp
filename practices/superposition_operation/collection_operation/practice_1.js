'use strict';

function hybrid_operation(collection) {
  return collection.map(num => num * 3 + 2).reduce((acc, num) => acc + num)
}

module.exports = hybrid_operation;

