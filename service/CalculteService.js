'use strict';


/**
 * Perform arithmetic operations on two numbers
 *
 * body Operator  (optional)
 * returns inline_response_200
 **/
exports.calculate = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : 8
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

