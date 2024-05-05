"use strict";

const jwt = require("jsonwebtoken");
const { writeTokenToFile } = require("../utils/token");
/**
 * Perform login to app
 *
 * body Login
 * returns inline_response_200
 **/

exports.login = function (body) {
  return new Promise(function (resolve, reject) {
    if (body.phone === "0547649395" && body.code === "123456") {
      // Authentication successful, generate JWT token
      const token = jwt.sign({ phone: body.phone }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      writeTokenToFile(token);
      resolve({ token: token });
    } else {
      // Authentication failed, reject with an error message
      reject({ message: "Invalid phone number or code" });
    }
  });
};
