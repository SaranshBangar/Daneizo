import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  rentals: mongoose.Types.ObjectId[]; // Reference to rental records
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rentals: [{ type: mongoose.Types.ObjectId, ref: 'Rental' }],
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
