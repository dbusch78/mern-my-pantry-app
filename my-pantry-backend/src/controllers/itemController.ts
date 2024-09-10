import { Request, Response } from 'express';
import { Item } from '../models/Item';

// Get all items
export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
};

// Add an item
export const addItem = async (req: Request, res: Response) => {
  try {
    const { name, quantity, expirationDate, location, category } = req.body;
    const newItem = new Item({ name, quantity, expirationDate, location, category });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding item' });
  }
};
