'use strict';
function rank_by_two_large_one_small(collection){
  let result = [];
  let sortedCollection = collection.sort((a, b) => a - b);
  for(let start = 0; start < collection.length; start += 3){
    if (start + 3 >= collection.length) {
      result = result.concat(sortedCollection.slice(start));
      continue;
    }
    result = result.concat(sortedCollection.slice(start + 1, start + 3)).concat(collection[start]);
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
