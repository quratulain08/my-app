// src/models/User.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the User interface
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

// Define the User schema
const UserSchema = new Schema<IUser>({
  name: { type: String, required: [true, 'Name is required'] },
  email: { type: String, required: [true, 'Email is required'], unique: true },
  password: { type: String, required: [true, 'Password is required'] },
  role: { type: String, default: 'user' }  // user or admin (internship office)
});

// bycrypt wala kaam idr mt krooo
// agr yahan pe lazmi krna hai to frontend pr decrypt b krooo

// Check if the model exists to avoid overwrite issues during development
const User = models.User || model<IUser>('User', UserSchema);

export default User;