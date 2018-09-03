function count_same_elements(collection) {
  let countMap = {};
  collection.forEach(e => {
    if (countMap[e] === undefined) {
      countMap[e] = 1;
      return;
    }
    countMap[e]++;
  })
  let result = [];
  for(let key in countMap){
    result.push({key:key, count:countMap[key]});
  }
  return result;
}

module.exports = count_same_elements;
