'use strict';

var get_integer_interval = require('./get_integer_interval.js')

function get_letter_interval_2(number_a, number_b) {
  var numberArray = [];
  if(number_a < number_b){
    for(var v = number_a; v <= number_b; v++){
      numberArray.push(v);
    }
  }else{
    for(var v = number_a; v >= number_b; v--){
      numberArray.push(v);
    }
  }
  return numberArray.map(num => {
    let result = '';
    do {
      num -= 1;
      result = String.fromCharCode(97 + (num % 26)) + result;
      num = Math.floor(num / 26);
    } while(num > 0);
    return result;
  });
}

module.exports = get_letter_interval_2;

