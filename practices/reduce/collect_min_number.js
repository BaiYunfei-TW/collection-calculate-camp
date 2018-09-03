'use strict';

function collect_min_number(collection) {
  return collection.reduce((acc, num) => Math.min(acc, num))
}

module.exports = collect_min_number;

