import React from "react";
    import { useDispatch } from "react-redux";
     import { addToCart } from "../redux/action/cartAction";
    const ProductItem =({product})=>{
        const dispatch = useDispatch();
        const handleAddToCart = () => {
            dispatch(addToCart(product));
    }
     return (
    <li>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>&#8377;{product.price}</p>
        <button onClick={handleAddToCart} id= {'add-to-cart-button-&{product.id}'}>Add to cart</button>
    </li>
)
}
export default ProductItem;