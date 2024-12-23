// src/redux/reducers/CartReducer.js

const initialState = {
  cartItem: [], // Ensure this is initialized as an array
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case'ADD_TO_CART':
const existingItem =state.cartItem.find((item) => item.id === action.payload.id);
  if (existingItem){
    return{
        ...state,
        cartItem:state.cartItem.map((item)=>
        item.id === action.payload.id ? {...item,quantity:item.quantity+1}:item
    )
    };
  }else{
    return{
        ...state,
        cartItem:[...state.cartItem,{...action.payload,quantity:1}],
    };
  }
      case 'REMOVE_FROM_CART':
          return {
              ...state,
              cartItem: state.cartItem.filter(item => item.id !== action.payload.id),
          };
      case 'INCREASE_QUANTITY':
          return {
              ...state,
              cartItem: state.cartItem.map(item =>
                  item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
          };
      case 'DECREASE_QUANTITY':
          return {
              ...state,
              cartItem: state.cartItem.map(item =>
                  item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
              ),
          };
      default:
          return state;
  }
};

export default CartReducer;
