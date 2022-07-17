"use strict";
/**
 * ## Imports
 *
 */
//Mongoose - the ORM
var Mongoose = require("mongoose"),
  ObjectId = Mongoose.Schema.Types.ObjectId,
  Schema = Mongoose.Schema;

const UserSchema = new Mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    middleName: { type: String },
    gender: { type: String },
    phoneNumber: { type: String },
    birthday: { type: String },
    profile_img: {
      type: String,
      default: "/assets/images/curved-images/curved2.jpg",
    },
    scope: { type: Array, required: true, default: "user" },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    _id: true,
  }
);

var User = Mongoose.model("users", UserSchema);

module.exports = User;
