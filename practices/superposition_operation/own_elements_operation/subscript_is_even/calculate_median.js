'use strict';
var calculate_median = function(collection){
  let numberWithEvenIndex = collection.filter((num, index) => index % 2 === 1);
  var arr = numberWithEvenIndex.sort((a, b) => a - b )
  if (arr.length % 2 == 1) {
    return arr[Math.floor(arr.length / 2)];
  }
  return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length/2 - 1)]) / 2;
};
module.exports = calculate_median;
