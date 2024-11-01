// models/Item.js
const mongoose = require('mongoose');

// Define the Item schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trims whitespace from the string
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
    min: 0, // Ensures price cannot be negative
  },
  availability: {
    type: Boolean,
    default: true, // Item is available by default
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically set the update date
  },
});

// Create a pre-save hook to update the `updatedAt` field
ItemSchema.pre('save', function (next) {
  this.updatedAt = Date.now(); // Update the `updatedAt` field
  next();
});

// Create a model from the schema
const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
