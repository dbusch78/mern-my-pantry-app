import { Schema, model } from 'mongoose';

const itemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  expirationDate: { type: Date, required: true },
  location: { type: String, required: true }, // e.g., 'pantry', 'fridge', 'freezer'
  category: { type: String, required: true }  // e.g., 'grains', 'meat', 'vegetables'
});

export const Item = model('Item', itemSchema);
