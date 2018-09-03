'use strict';
var number_map_to_word = function(collection){
  return collection.map(num => String.fromCharCode(96 + num));
};

module.exports = number_map_to_word;
