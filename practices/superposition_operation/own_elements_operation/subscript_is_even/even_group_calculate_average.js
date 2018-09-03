'use strict';
var even_group_calculate_average = function(collection){
  let result = [];

  let evensWithEvenIndex = collection.filter((num, index) => index % 2 === 1).filter(num => num % 2 === 0);
  let i = 1;
  let left = evensWithEvenIndex.length;
  let tmp = evensWithEvenIndex.filter(number => levelOfNumber(number) === i);
  while (left != 0) {
    if (tmp.length != 0) {
      result.push(tmp);
    }

    left -= tmp.length;
    i ++;
    tmp = evensWithEvenIndex.filter(number => levelOfNumber(number) === i);
  }
  console.log(result)

  if (result.length === 0) {
    return [0];
  }
  return result.map(e => e.reduce((acc, num) => acc + num, 0) / e.length);
};

function levelOfNumber(num) {
  let level = 0;
  while (num != 0) {
    level ++;
    num = Math.floor(num / 10);
  }
  return level;
}

module.exports = even_group_calculate_average;
