import mongoose from "mongoose";

const sportSchema = new mongoose.Schema({
  sportName: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  playerCount: {
    type: Number,
    required: true,
  },
  roles: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.models.Sport || mongoose.model("Sport", sportSchema);
