'use strict';

function get_letter_interval(number_a, number_b) {
  var result = [];
  if(number_a < number_b){
    for(var v = number_a; v <= number_b; v++){
      result.push(v);
    }
  }else{
    for(var v = number_a; v >= number_b; v--){
      result.push(v);
    }
  }
  return result.map(num => String.fromCharCode(96 + num));
}

module.exports = get_letter_interval;
