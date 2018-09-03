'use strict';

function median_to_letter(collection) {
  let sorted = collection.sort(((a, b) => a - b));
  let median = null;
  if (collection.length % 2 === 1) {
    median = sorted[collection.length/2];
  }else{
    median = (sorted[Math.floor(collection.length/2)] + sorted[Math.floor(collection.length/2 + 1)])/2;
  }

  let result = '';
  do {
    median -= 1;
    result = String.fromCharCode(97 + (median % 26)) + result;
    median = Math.floor(median / 26);
  } while(median > 0);
  return result;
}

module.exports = median_to_letter;
