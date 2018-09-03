'use strict';

function grouping_count(collection) {
  let resultMap = {}
  collection.forEach(num => {
    if (resultMap[num] == undefined) {
      resultMap[num] = 1
      return;
    }
    resultMap[num]++;
  })
  return resultMap;
}

module.exports = grouping_count;
