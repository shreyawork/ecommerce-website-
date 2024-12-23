import React from "react";
import './cart.css';
import { useDispatch,useSelector } from "react-redux";
import {removeFromCart,increaseQuantity,decreaseQuantity} from '../redux/action/cartAction';
function Cart () {
  const cartItem = useSelector ((state) => state.cartReducer.cartItem);
   
  const dispatch = useDispatch();
  const handleRemove=(product) =>{
    dispatch(removeFromCart(product));
  }
  const handleIncrease =(product) =>
  {
    dispatch (increaseQuantity(product));
  };
  const handleDecrease =(product) =>{
    dispatch(decreaseQuantity(product));
};
const calculateTotal= (cartItem) =>{
  if(!cartItem|| cartItem.length===0) return 0;
  return cartItem.reduce((total,item) => {
     return total+ (item.price*item.quantity);
  },0);
};
const totalAmount = calculateTotal(cartItem);
return (
  <div>
    <div className="cart-container">
    <h1>Cart</h1>
    {cartItem && cartItem.length ===0 ?(
      <p> your cart is empty</p>
    ):(
      <ul>
        {cartItem && cartItem.map((item) =>(
            <div className="cart-item" key={item.id}>
              <h2>{item.title}</h2> 
              <p>&#8377;{item.price}</p>
              <p>Quantity:{item.quantity}</p>
             <p className="total-price"> TotalPrice: &#8377;{item.price*item.quantity}</p>
      
             <div className="quanity-btns">
              <button onClick ={() => handleIncrease(item)}> +</button>
              <button onClick ={() => handleDecrease(item)}> -</button>
              </div>
              <button onClick ={() => handleRemove(item)}> remove</button>
              </div>
            
          ))}
      </ul>
    )}
    <div className="cart-summary">
      Total cart price: &#8377;{totalAmount}
    </div>
  </div>
  </div>
);
}
export default Cart;