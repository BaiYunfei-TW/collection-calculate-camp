'use strict';

function double_to_one(collection) {
  let result = [];
  collection.forEach(arr => {
    if (typeof arr === 'number') {
      result.push(arr);
      return;
    }
    arr.forEach(num => {
      result.push(num);
    })
  })
  return result;
}

module.exports = double_to_one;
