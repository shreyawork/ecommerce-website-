import React from "react";
function CartItem({item,onRemove}){
    return (
        <li>
            <h2>{item.title}</h2>
            <p> {item.description}</p>
            <p> ${item.price}</p>
            <button onClick={() => onRemove(item)}>Remove</button>
        </li>
    );
}
export default CartItem;