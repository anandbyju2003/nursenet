const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  pincode: Number,
  contact: Number,
  password: String,
});

const workerSchema = new Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  pincode: Number,
  contact: Number,
  profession: String,
  rating: { type: Number, default: 0 },
  noofratings: { type: Number, default: 0 },
  reviews: [{ reviewer: String, review: String }]
});

module.exports = {
  Users: mongoose.model("User", userSchema),
  Workers: mongoose.model("Workers", workerSchema),
};
