'use strict';

var utils = require('../utils/writer.js');
var Calculate = require('../service/CalculateService');

module.exports.calculate = function calculate (req, res, next, body) {
  Calculate.calculate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
