'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(num => {
    let result = '';
    do {
      num -= 1;
      result = String.fromCharCode(97 + (num % 26)) + result;
      num = Math.floor(num / 26);
    } while(num > 0);
    return result;
  })
};

module.exports = number_map_to_word_over_26;
