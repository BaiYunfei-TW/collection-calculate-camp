'use strict';
function one_add_next_multiply_three(collection){
  return collection.map((num, index) => {
    if (index === collection.length - 1) {
      return;
    }
    return 3 * (num + collection[index + 1]);
  }).filter(num => num != undefined);
}
module.exports = one_add_next_multiply_three;
