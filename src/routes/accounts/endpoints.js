"use strict";
/**
 * ## Imports
 *
 */
//Handle the endpoints
var Handlers = require("./handlers"),
  internals = {};

internals.endpoints = [
  {
    method: ["GET"],
    path: "/",
    handler: Handlers.index,
  },
  {
    method: ["GET"],
    path: "/login",
    handler: Handlers.login,
  },
  {
    method: ["GET"],
    path: "/logout",
    handler: Handlers.logout,
  },
  {
    method: ["GET"],
    path: "/signup",
    handler: Handlers.signup,
  },
  {
    method: ["POST"],
    path: "/signup",
    handler: Handlers.createAccount,
  },
  {
    method: ["POST"],
    path: "/authentication",
    handler: Handlers.webAuthentication,
  },
];

module.exports = internals;
