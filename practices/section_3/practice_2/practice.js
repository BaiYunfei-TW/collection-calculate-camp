function create_updated_collection(collection_a, object_b) {
  let result = [];
  collection_a.forEach(data => {
    if (object_b.value.includes(data.key)) {
      result.push({key: data.key, count: data.count - Math.floor(data.count/3)});
    } else {
      result.push(data)
    }
  })
  return result;
}

module.exports = create_updated_collection;
