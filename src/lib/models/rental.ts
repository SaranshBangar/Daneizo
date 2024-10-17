import mongoose, { Schema, Document } from 'mongoose';

export interface IRental extends Document {
  user: mongoose.Types.ObjectId;
  product: mongoose.Types.ObjectId;
  rentalDuration: number; // In days
  rentalAmount: number;
  rentedAt: Date;
}

const RentalSchema: Schema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
  rentalDuration: { type: Number, required: true },
  rentalAmount: { type: Number, required: true },
  rentedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Rental || mongoose.model<IRental>('Rental', RentalSchema);
