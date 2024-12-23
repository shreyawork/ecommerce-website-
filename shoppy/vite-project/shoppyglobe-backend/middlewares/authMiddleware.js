import jwt from 'jsonwebtoken';

export const authenticateUser=(req,res,next) =>{
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Notoken,authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({message:'Token does not  valid'});
  }
};
