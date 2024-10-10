// models/User.ts
import mongoose, { Document, Model, Schema } from 'mongoose';

interface User extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema: Schema<User> = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
},{timestamps:true});

const User = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);

export default User;
