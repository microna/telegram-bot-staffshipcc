const mongoose = require('mongoose');

const nameObjectSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
  },
});

const productSchema = new mongoose.Schema(
  {
    clientId: {
      type: Number,
      required: true,
    },
    clientUserName: {
      type: String,
    },
    trackNumber: {
      type: String,
    },
    name: [nameObjectSchema],
    totalAmount: {
      type: Number,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('product', productSchema);
