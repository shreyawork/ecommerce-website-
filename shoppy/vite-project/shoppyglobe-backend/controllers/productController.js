// productController.js
import Product from '../models/product.js';

// Controller to get all products
export const grtProduct =async(req,res) =>{
  try {
    const products = await Product.find();  // Fetch all products
    res.status(200).json(products);  // Send products in the response
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server Error' });  // Handle errors
  }
};

// Controller to get a single product by ID
export const getProductById = async(res,req) =>{
  const { id } = req.params;  // Extract product ID from URL parameters
  try {
    const product = await Product.findById(id);  // Fetch product by ID
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });  // Handle case if product is not found
    }
    res.status(200).json(product);  // Send product in the response
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    res.status(500).json({ message: 'Server Error' });  // Handle errors
  }
};
