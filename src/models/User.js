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
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
