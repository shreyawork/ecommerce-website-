import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRoutes from './Routes/productRoutes.js';
import cartRoutes from './Routes/cartRoutes.js';
// Importing default export
import userRoutes from './Routes/userRoutes.js';


dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log('MongoDB connection error:', err));
