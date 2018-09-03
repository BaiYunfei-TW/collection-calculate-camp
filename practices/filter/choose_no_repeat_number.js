'use strict';

function choose_no_repeat_number(collection) {
  let result = [];
  collection.forEach(num => {
    if (result.indexOf(num) == -1) {
      result.push(num);
    }
  })
  return result;
}

module.exports = choose_no_repeat_number;
