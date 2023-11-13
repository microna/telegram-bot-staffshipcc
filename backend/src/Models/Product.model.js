const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    isReaded: {
      type: Boolean,
      default: false,
    },
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
    comments: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('product', productSchema);
