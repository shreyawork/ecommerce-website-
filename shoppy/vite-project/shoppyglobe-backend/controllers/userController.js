import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// User Registration
export const registerUser = async (req,res) =>{
  const { username, email, password } = req.body;
  try {
    const existingUser=await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({ message: 'Email already use' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// User Login
export const LoginUser =async (req,res) =>{
  const {email,password} =req.body;
  try {
    const user= await User.findOne({email});
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token =jwt.sign({ userId :user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
