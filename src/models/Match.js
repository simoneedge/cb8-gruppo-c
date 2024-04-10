import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const matchSchema = new mongoose.Schema({
  matchID: {
    type: String,
    default: uuidv4,
    unique: true,
    required: true,
  },
  team1: {
    type: Array,
    required: false,
  },
  team2: {
    type: Array,
    required: false,
  },
  sport: {
    type: String,
    required: true,
  },
  players: {
    type: Number,
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
    required: false,
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
    required: false,
  },
});

module.exports = mongoose.models.Match || mongoose.model("Match", matchSchema);
