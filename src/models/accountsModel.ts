import mongoose, { Schema, Document } from 'mongoose';

export interface IAccount extends Document {
  // Define la estructura de tu documento MongoDB aquí
  username: string;
  email: string;
}

const accountSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.model<IAccount>('Account', accountSchema);
