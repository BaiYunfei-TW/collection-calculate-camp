function count_same_elements(collection) {
  let countMap = {};
  collection.forEach(e => {
    let count = pareseKeyAndCount(e);
    if (countMap[count.key] === undefined) {
      countMap[count.key] = count.count;
      return;
    }
    countMap[count.key] += count.count;
  })
  let result = [];
  for(let key in countMap){
    result.push({name:key, summary:countMap[key]});
  }
  return result;
}

function pareseKeyAndCount(str) {
  let count = {
    key: str,
    count: 1
  }
  if (str.includes('[')) {
    count.key = str.substring(0, str.indexOf('['));
    count.count = parseInt(str.substring(str.indexOf('[') + 1, str.indexOf(']')));
  }else if (str.includes('-')) {
    count.key = str.split('-')[0];
    count.count = parseInt(str.split('-')[1]);
  }else if (str.includes(':')) {
    count.key = str.split(':')[0];
    count.count = parseInt(str.split(':')[1]);
  }

  return count;
}

module.exports = count_same_elements;
