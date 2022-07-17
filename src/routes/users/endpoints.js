"use strict";
/**
 * ## Imports
 *
 */
//Handle the endpoints
var Handlers = require("./handlers"),
  internals = {};

const CONFIG = {
  auth: {
    strategy: "standard",
    scope: ["user"],
  },
  tags: ["api"],
};

let endpoints = [
  {
    method: ["GET"],
    path: "/user/dashboard",
    handler: Handlers.index,
  },
  {
    method: ["GET"],
    path: "/user/profile",
    handler: Handlers.profile,
  },
  {
    method: ["POST"],
    path: "/user/profile/update",
    handler: Handlers.profileUpdate,
  },
];

internals.endpoints = endpoints.map((r) => {
  if (!!r.config) r.config = { ...CONFIG, ...r.config };
  else r.config = { ...CONFIG };
  return r;
});

module.exports = internals;
