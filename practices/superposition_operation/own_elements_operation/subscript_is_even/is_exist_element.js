'use strict';
var is_exist_element = function(collection,element){
  return collection.filter((num, index) => index % 2 === 0 && num === element).length != 0;
};
module.exports = is_exist_element;
