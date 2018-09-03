'use strict';
var calculate_average = function(collection){
  let evens = collection.filter((num, index) => index % 2 === 1);
  return evens.reduce((acc, num) => acc + num) / evens.length;
};
module.exports = calculate_average;
