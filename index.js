"use strict";

var path = require("path");
var http = require("http");
var oas3Tools = require("oas3-tools");
require("dotenv").config();
var authenticateToken = require("./middleware/authMiddleware");
const passport = require("passport");
var serverPort = process.env.PORT;
var jwtStrategy = require("./utils/jwt").jwtStrategy;

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options
);

var app = expressAppConfig.getApp();

// Initialize Passport middleware
app.use(passport.initialize());
passport.use(jwtStrategy);

app.post("EladVider/Calculate/1.0.0/Calculate", authenticateToken);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  );
  console.log(
    "Swagger-ui is available on http://localhost:%d/docs",
    serverPort
  );
});
