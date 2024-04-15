import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    default: "No name provided",
  },
  surname: {
    type: String,
    required: false,
    default: "No surname provided",
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
    default: "No birthdate provided",
  },
  email: {
    type: String,
    required: false,
    default: "No email provided",
  },
  location: {
    type: String,
    required: false,
    default: "No location provided",
  },
  sports: {
    type: Array,
    required: false,
    default: [],
  },
  roles: {
    type: Array,
    required: false,
    default: [],
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
    default: [],
  },
  friends: {
    type: Array,
    required: false,
    default: [],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
