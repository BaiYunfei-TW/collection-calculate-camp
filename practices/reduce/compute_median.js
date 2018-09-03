'use strict';

function compute_median(collection) {
  var arr = collection.sort((a, b) => a - b )
  if (arr.length % 2 == 1) {
    return arr[Math.floor(arr.length / 2)];
  }
  return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length/2 - 1)]) / 2;
}

module.exports = compute_median;


