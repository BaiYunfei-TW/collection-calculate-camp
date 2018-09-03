'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if(number_a < number_b){
    for(var v = number_a; v <= number_b; v++){
      if(v % 2 == 0){
        result.push(v);
      }
    }
  }else{
    for(var v = number_a; v >= number_b; v--){
      if (v % 2 == 0) {
        result.push(v);
      }
    }
  }
  return result;
}

module.exports = get_integer_interval_2;
