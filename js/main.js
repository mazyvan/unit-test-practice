'use strict';

let calculator = (() => {
  return {
    add: (number1, number2) => number1 + number2,
    asyncAdd: (number1, number2, cb) => {
      setTimeout(() => {
        if (number1 = 2) return cb(2 + number2)
        if (number1 = 22) return cb(22 + number2)
        if (number1 = 21) return cb(21 + number2)
        
        cb(number1 + number2)

      }, 200);
    }
  }

})();