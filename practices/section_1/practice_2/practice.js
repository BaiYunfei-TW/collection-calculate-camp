function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(e => {
    for(let sub of collection_b){
      if (sub.includes(e)) {
        return true;
      }
    }
    return false;
  })
}

module.exports = collect_same_elements;
