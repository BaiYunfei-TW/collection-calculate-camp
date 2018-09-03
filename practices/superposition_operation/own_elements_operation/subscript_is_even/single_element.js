'use strict';
var single_element = function(collection){
  let numberWithEvenIndex = collection.filter((num, index) => index % 2 === 1);
  return numberWithEvenIndex.filter(num => numberWithEvenIndex.indexOf(num) == numberWithEvenIndex.lastIndexOf(num));
};
module.exports = single_element;
