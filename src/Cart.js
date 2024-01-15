import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import FormatPrice from './Helpers/FormatPrice';

const Cart = () => {

    const { cart, clearCart, total_price, shipping_fee} = useCartContext();
    
    if( cart.length === 0)
    {
        return <EmptyDiv>
            <h3>No Item in Cart</h3>
        </EmptyDiv>
    }

    return (
        <Wrapper>
            <div className="container">
                <div className="cart_heading grid grid-five-column">
                    <p>Item</p>
                    <p className="cart-hide">Price</p>
                    <p>Quantity</p>
                    <p className="cart-hide">Subtotal</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div className="cart-item">
                    {cart.map((curElem) => {
                            return <CartItem key={curElem.id} {...curElem}/>; 
                        })}
                </div>
                <hr/>
                <div className="cart-two-button">
                    <NavLink to="/products">
                        <button className="normal">Continus Shopping</button>
                    </NavLink>
                    <button className="normal" onClick={clearCart}>Clear Cart</button>
                </div>
                <div className="order-total--amount">
                    <div className="order-total--subdata">
                        <div>
                            <p>Subtotal:</p>
                            <p><FormatPrice price={total_price}/></p>
                        </div>
                    </div>
                    <div>
                        <p>Shipping fee:</p>
                        <p><FormatPrice price={shipping_fee}/></p>
                    </div>
                    <hr/>
                    <div>
                        <p>Order Total:</p>
                        <p><FormatPrice price={shipping_fee + total_price}/></p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const EmptyDiv = styled.div`
    display: grid;
    place-items: center;
    height: 50vh;

    h3{
        font-size: 4.2rem;
        text-transform: capitalize;
        font-weight: 300;
    }
`;

const Wrapper = styled.section``;
 
export default Cart;