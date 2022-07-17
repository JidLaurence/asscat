"use strict";

var internals = {};
const _ = require("lodash");
const Crypto = require("@lib/Crypto");
const { Users, Settings } = require("@models");

internals.index = async function (req, reply) {
  reply.view("user/dashboard/index.html", {
    credentials: req.auth.credentials,
  });
};
internals.profile = async function (req, reply) {
  const credentials = await Users.findOne({
    _id: req.auth.credentials._id,
  }).lean();
  reply.view("user/profile/index.html", {
    credentials,
  });
};
internals.profileUpdate = async function (req, reply) {
  let payload = req.payload;
  delete payload.payload;

  if (!_.isEmpty(payload.password)) {
    payload.password = Crypto.encrypt(payload.password);
  }

  var test = await Users.update(
    {
      _id: req.auth.credentials._id,
    },
    {
      $set: payload,
    }
  ).lean();

  return reply.redirect(
    `/user/profile?message=Successfully update!&alert=success`
  );
};
module.exports = internals;
