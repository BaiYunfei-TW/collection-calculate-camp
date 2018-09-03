function count_same_elements(collection) {
  let countMap = {};
  collection.forEach(e => {
    let key = e;
    let count = 1;
    if (e.includes('-')) {
      key = e.split('-')[0];
      count = parseInt(e.split('-')[1])
    }
    if (countMap[key] === undefined) {
      countMap[key] = count;
      return;
    }
    countMap[key] += count;
  })
  let result = [];
  for(let key in countMap){
    result.push({key:key, count:countMap[key]});
  }
  return result;
}

module.exports = count_same_elements;
