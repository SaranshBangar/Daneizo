// models/RentalItem.js
const mongoose = require('mongoose');

// Define the RentalItem schema
const RentalItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the user who rents the item
    required: false, // Not required since there may be no user yet
    ref: 'User', // Assuming there's a User model
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to the rented item
    required: true,
    ref: 'Item', // Assuming there's an Item model
  },
  rentalStartDate: {
    type: Date,
    required: true,
  },
  rentalEndDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'overdue'],
    default: 'active', // Default status is active
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date
  },
});

// Create a model from the schema
const RentalItem = mongoose.model('RentalItem', RentalItemSchema);

module.exports = RentalItem;
