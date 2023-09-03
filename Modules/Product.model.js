const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  trackNumber: {
    type: String,
  },
  name: {
    type: Array,
  },
  totalAmount: {
    type: Number,
  },
});

module.exports = mongoose.model('product', productSchema);

// import mongoose from "mongoose";

// const UserScheme = new mongoose.Schema({
//     fullName: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     passwordHash: {
//         type: String,
//         // required: true
//     },
//     avatarUrl: String,
// },
// {
//     timestamps: true,
// });

// export default mongoose.model('User', UserScheme)

//TODO
