function create_updated_collection(collection_a, object_b) {
  let countMap = {};
  collection_a.forEach(e => {
    let count = pareseKeyAndCount(e);
    if (countMap[count.key] === undefined) {
      countMap[count.key] = count.count;
      return;
    }
    countMap[count.key] += count.count;
  })
  let result = [];
  for(let key in countMap){
    if (object_b.value.includes(key)) {
      result.push({key:key, count:countMap[key] - Math.floor(countMap[key]/3)});
      continue;
    }
    result.push({key:key, count:countMap[key]});
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
  } else if (str.includes('-')) {
    count.key = str.split('-')[0];
    count.count = parseInt(str.split('-')[1]);
  } else if (str.includes(':')) {
    count.key = str.split(':')[0];
    count.count = parseInt(str.split(':')[1]);
  }

  return count;
}
module.exports = create_updated_collection;
