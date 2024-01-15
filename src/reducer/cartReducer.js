import { act } from "react-dom/test-utils";

const cartReducer = (state, action) => {
  
  if(action.type === "ADD_TO_CART")
  {
    let {id,size,amount,product} = action.payload;

    let existingProduct = state.cart.find((curItem) => curItem.id === id + size);

    if(existingProduct)
    {
        let updatedProduct = state.cart.map((curElem) =>{
            if(curElem.id == id+size)
            {   
                let newAmount = curElem.amount + amount;
                return {
                    ...curElem,
                    amount: newAmount,
                };
            }
            else{
                return {
                    ...curElem,
                };
            }
        });
        return {
            ...state,
            cart:updatedProduct,
        }
    }
    else
    {
        let cartProduct;

        cartProduct = {
            id: id+size,
            name: product.name,
            size,
            amount,
            image:product.image_source,
            price:product.price,
        };

        return {
            ...state,
            cart: [...state.cart, cartProduct],
        };
    }
    
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_DESC") {

    let updatedProduct = state.cart.map((curElem) => {
        if(curElem.id === action.payload)
        {
            let newAmount = curElem.amount -1;
            if(newAmount <= 1)
            {
                newAmount = 1;
            }
            return {
                ...curElem,
                amount: newAmount,
            };
        }
        else
        return{
            ...curElem,
        };
    });

        return {
        ...state,
        cart: updatedProduct,
        };    
    };


    if (action.type === "SET_INCR") {

        let updatedProduct = state.cart.map((curElem) => {
            if(curElem.id === action.payload)
            {
                let newAmount = curElem.amount +1;
                return {
                    ...curElem,
                    amount: newAmount,
                };
            }
            else
            return{
                ...curElem,
            };
        });
    
            return {
            ...state,
            cart: updatedProduct,
            };    
        };


        if(action.type === "ITEM_TOTAL")
        {
            let newValue = state.cart.reduce((initialValue, curElem) => {
                let { amount } = curElem;
                initialValue = initialValue + amount;

                return initialValue;
            },0);
            return{
                ...state,
                total_item: newValue,
            }
        };

        if(action.type === "CART_TOTAL_PRICE")
        {
            let newValue = state.cart.reduce((initialValue, curElem) => {
                let { price, amount } = curElem;
                initialValue = initialValue + (price * amount);

                return initialValue;
            },0);
            return{
                ...state,
                total_price: newValue,
            }
        };






return state;
}

export default cartReducer;