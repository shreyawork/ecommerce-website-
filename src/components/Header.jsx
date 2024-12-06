import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import logo from "../assets/th.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header =() =>{
    const cartItem  =useSelector((state)=>state.cartReducer.cartItem);
    const cartCount = cartItem?cartItem.reduce((total,item) => total + item.quantity,0):0;
    return(
            <nav>
                <div className="nav-logo">
             <Link>
                  <img src= {logo} alt="logo"  className="logo"/>
                  </Link>
                   </div>
                       <div className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/Cart">Cart ({cartCount})</Link>
                     </div>
                     <div className="cart-icon">
                        <Link to="/Cart">
                     <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                     <span>{cartCount}</span>
                            </Link>
                        </div>
        </nav>
    );
};
export default Header;