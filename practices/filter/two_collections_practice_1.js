'use strict';

function choose_common_elements(collection_a, collection_b) {
  return collection_a.filter(num => collection_b.indexOf(num) != -1);
}

module.exports = choose_common_elements;
