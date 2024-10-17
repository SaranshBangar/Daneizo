import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  availability: boolean;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
