'use strict';

function spilt_to_zero(number, interval) {
  let result = [number];
  for(let num = number; num > 0; num -= interval) {
    let tmp = parseFloat((num - interval).toFixed(1));
    result.push(tmp);
    if (tmp == 0) {
      break;
    }
  }
  return result;
}

module.exports = spilt_to_zero;
