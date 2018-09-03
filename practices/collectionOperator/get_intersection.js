'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  collection_b.forEach(numB => {
    collection_a.forEach(numA => {
      if (numA == numB) {
        result.push(numA);
      }
    })
  })
  return result;
}

module.exports = get_intersection;
