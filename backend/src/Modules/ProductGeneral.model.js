const mongoose = require('mongoose');

const productGeneralSchema = new mongoose.Schema(
  {
    productText: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    userTGId: {
      type: Number,
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

module.exports = mongoose.model('productGeneral', productGeneralSchema);
