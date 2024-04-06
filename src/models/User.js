import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  sports: {
    type: Array,
    required: false,
  },
  roles: {
    type: Array,
    required: false,
  },
  matchPlayedCount: {
    type: Number,
    required: true,
  },
  avarageRating: {
    type: Number,
    required: true,
  },
  ratingGames: {
    type: [Number],
    required: true,
  },
  friends: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
