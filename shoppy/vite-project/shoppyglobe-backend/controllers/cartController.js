import Cart from '../models/Cart.js';
import Product from '../models/product.js';

import { Types } from 'mongoose'; // Import Types from mongoose

// Add product to cart
export const addToCart =async(req,res) =>{
  const {userId,productId,quantity} =req.body;
  try {
    console.log("Add to Cart request received:", req.body); // Add logging here to confirm

    if (!Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const product = await Product.findById(new Types.ObjectId(productId));

    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

 let cart = await Cart.findOne({userId});
    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const productIndex = cart.products.findIndex((item) => item.productId.toString() === productId);
    if (productIndex >= 0) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    console.error("Error in addToCart:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Update cart
export const updateCart = async (req, res) => {
  const{userId,productId,quantity} = req.body;;
  try {
    const cart=await Cart.findOne({userId});
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const productIndex = cart.products.findIndex((item) => item.productId.toString() === productId);
    if (productIndex === -1) {
      return res.status(404).json({ message: 'Product not in cart' });
    }

    cart.products[productIndex].quantity = quantity;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
  const {userId,productId} = req.body;

  try {
    const cart=await Cart.findOne({userId});
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.products = cart.products.filter((item) => item.productId.toString() !== productId);
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
