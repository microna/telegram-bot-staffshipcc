const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    isBot: {
      type: Boolean,
      default: false,
    },
    firstName: {
      type: String,
    },
    userName: {
      type: String,
    },
    languageCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('user', userSchema);
