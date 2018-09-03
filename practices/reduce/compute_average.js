'use strict';

function compute_average(collection) {
  return collection.reduce((acc, num) => acc + num) / collection.length;
}

module.exports = compute_average;

