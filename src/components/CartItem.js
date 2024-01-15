import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';

const CartItem = ({ id, name, image, size, price, amount }) => {

    const { removeItem, setIncrement, setDecrement} = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name" style={{backgroundSize:"100%"}}>
            <div>
                <figure>
                    <img src={image} alt={name} />
                </figure>
            </div>
        </div>
        <div>
            <p>{name}</p>
            <div className="size-div">
                <p>Size:</p>
                <div>{size}</div>
            </div>
        </div>
        <div className="cart-hide">
            <p><FormatPrice price={price}/></p>
        </div>
        <CartAmountToggle amount={amount} setIncrease={() => setIncrement(id)} setDecrease={() => setDecrement(id)}/>
        <div className="cart-hide">
            <p><FormatPrice price={price * amount}/></p>
        </div>
        <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
        </div>
    </div>
  )
}

export default CartItem;