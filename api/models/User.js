import mongoose from "mongoose";

const schema = new mongoose.Schema({
  tienda: {
    type: String,
    enum: ['Il', 'Do'],
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: { type: String, required: true },
  gender: { type: Boolean, default: true },
  password: { type: String, required: true },
  wishList: [{ date: Date, place: String, capsule: String, price: Number, quantity: Number, name: String, imgNum: Number },],
  cart: [{ date: Date, place: String, capsule: String, price: Number, quantity: Number, name: String, imgNum: Number },],
})

export default mongoose.model('User', schema);
