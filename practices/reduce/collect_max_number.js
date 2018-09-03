'use strict';

function collect_max_number(collection) {
  return collection.reduce((acc, num) => Math.max(acc, num));
}

module.exports = collect_max_number;
