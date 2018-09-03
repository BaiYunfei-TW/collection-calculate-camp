'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((sum, num) => sum + num);
}

module.exports = calculate_elements_sum;

