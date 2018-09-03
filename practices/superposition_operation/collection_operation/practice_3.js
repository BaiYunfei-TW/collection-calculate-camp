'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.filter(num => num % 2 === 1).map(num => num * 3 + 5).reduce((acc, num) => acc + num);
}

module.exports = hybrid_operation_to_uneven;

