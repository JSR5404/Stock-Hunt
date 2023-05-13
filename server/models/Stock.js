const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const stockSchema = new Schema({
  ticker: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0.99,
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
});

const Stock = model('Stock', stockSchema);

module.exports = Stock;