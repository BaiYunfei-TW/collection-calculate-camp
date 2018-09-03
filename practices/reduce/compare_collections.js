'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce((acc, num, index) => {
    return acc && collection_b[index] === num;
  })
}

module.exports = compare_collections;


