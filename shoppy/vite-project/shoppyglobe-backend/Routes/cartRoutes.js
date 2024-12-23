import express from 'express';
import { addToCart, updateCart, removeFromCart } from '../controllers/cartController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js'; // Authentication middleware

const router = express.Router();

// The `/cart` path is relative to `/api/cart` in server.js
router.post('/', authenticateUser, addToCart); // POST /api/cart
router.put('/', authenticateUser, updateCart); // PUT /api/cart
router.delete('/', authenticateUser, removeFromCart); // DELETE /api/cart

export default router;
