function collect_same_elements(collection_a, object_b) {
  let result = [];
  collection_a.filter(e => object_b.value.includes(e.key)).forEach(e => {
    result.push(e.key);
  })
  return result;
}

module.exports = collect_same_elements;
