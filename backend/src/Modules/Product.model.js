const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    trackNumber: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: String,
    },
    info: {
      type: String,
    },
    userTGId: {
      type: Number,
      required: true,
    },
    userTGNick: {
      type: String,
    },
    status: {
      type: String,
    },
    isFilled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('product', productSchema);
