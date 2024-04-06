import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  team1: {
    type: Array,
    required: true,
  },
  team2: {
    type: Array,
    required: true,
  },
  sport: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  latitude: {
    type: Number,
    required: false,
  },
  longitude: {
    type: Number,
    required: false,
  },
  inProgress: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.models.Match || mongoose.model("Match", matchSchema);
