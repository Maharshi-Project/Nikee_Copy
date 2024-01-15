import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from 'styled-components';
import { Button } from '../Styles/Button';

const CartAmountToggle = ({ amount , setDecrease, setIncrease }) => {
  return (
    <Wrapper className="cart-button">
        <div className="amount-toggle">
            <Button onClick={() => setDecrease()}>
                <FaMinus/>
            </Button>
            <div className="amount-style">{ amount }</div>
            <Button onClick={() => setIncrease()}>
                <FaPlus/>
            </Button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.amount-toggle {
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    width: 50%;

    button {
      border: none;
      background-color: #222;
      cursor: pointer;
      text-color: #fff;
      border-radius: 25px;
    }

    .amount-style {
      font-size: 2.4rem;
      color: #222;

    }
  }

`; 

export default CartAmountToggle