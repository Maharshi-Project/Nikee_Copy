import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
    let newCartData = localStorage.getItem("nikeCart");
    // eslint-disable-next-line eqeqeq
    if(newCartData == [])
    {
        return [];
    }
    else{
        return JSON.parse(newCartData);
    }
};

const initialSate = {
    // cart:[],
    cart: getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:500,
};

const CartProvider = ({ children }) => {

    const [state,dispatch] = useReducer(reducer, initialSate);

    const addToCart = (id,size,amount,product) =>{
        dispatch({type:"ADD_TO_CART", payload:{id,size,amount,product}})
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
      };

    const setDecrement = (id) =>{
        dispatch({type: "SET_DESC", payload: id});
    };

    const setIncrement = (id) =>{
        dispatch({type: "SET_INCR", payload: id});
    };

    // Clear Cart
    const clearCart = () =>{
        dispatch({type: "CLEAR_CART"});
    }


    // Add the data in localstorage
    useEffect(()=>{
        dispatch({type: "ITEM_TOTAL"});
        dispatch({type: "CART_TOTAL_PRICE"});
        localStorage.setItem("nikeCart", JSON.stringify(state.cart))
    },[state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrement, setIncrement}}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () =>{
    return useContext(CartContext);
}

export { CartProvider, useCartContext};