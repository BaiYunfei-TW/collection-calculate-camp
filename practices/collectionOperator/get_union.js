'use strict';

function get_union(collection_a, collection_b) {
  let result = collection_a;
  collection_b.forEach(num => {
    if(result.indexOf(num) == -1){
      result.push(num);
    }
  })
  return result;
}

module.exports = get_union;

