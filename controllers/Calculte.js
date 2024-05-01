"use strict";

var utils = require("../utils/writer.js");
var Calculte = require("../service/CalculteService");

module.exports.calculate = function calculate(req, res, next, body) {
  Calculte.calculate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
