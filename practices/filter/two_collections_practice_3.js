'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(num => {
    for(let i = 0; i < collection_b.length; i++){
      if (num % collection_b[i] == 0) {
        return true
      }
    }
    return false;
  })
}

module.exports = choose_divisible_integer;
