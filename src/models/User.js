import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: "User",
  },
  surname: {
    type: String,
    required: false,
    default: "User",
  },
  username: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
    default: "https://www.gravatar.com/avatar/",
  },
  birthdate: {
    type: Date,
    required: false,
    default: Date.now,
  },
  email: {
    type: String,
    required: false,
    default: "blablabla",
  },
  location: {
    type: String,
    required: false,
    default: "blablabla",
  },
  sports: {
    type: Array,
    required: false,
    default: ["blablabla"],
  },
  roles: {
    type: Array,
    required: false,
    default: ["blablabla"],
  },
  matchPlayedCount: {
    type: Number,
    required: false,
    default: 0,
  },
  avarageRating: {
    type: Number,
    required: false,
    default: 0,
  },
  ratingGames: {
    type: [Number],
    required: false,
    default: [0],
  },
  friends: {
    type: Array,
    required: false,
    default: ["blablabla"],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
