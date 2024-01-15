import { useState } from "react";
import styled from "styled-components";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useCartContext } from "../context/cart_context";

import Select from 'react-select';

const AddToCart = ({ product }) => {

    const { addToCart } = useCartContext();

    const { id } = product;

    const options = [
        { value: 'UK 4', label: 'UK 4' },
        { value: 'UK 5', label: 'UK 5' },
        { value: 'UK 6', label: 'UK 6' },
        { value: 'UK 7', label: 'UK 7' },
        { value: 'UK 8', label: 'UK 8' },
        { value: 'UK 9', label: 'UK 9' },
        { value: 'UK 10', label: 'UK 10' },
        { value: 'UK 11', label: 'UK 11' },
        { value: 'UK 12', label: 'UK 12' },
        { value: 'UK 13', label: 'UK 13' },
        { value: 'UK 14', label: 'UK 14' },
      ];

    const [size , setSelectedOption ] = useState({value:'UK 6',label:'UK 6'});

    const [amount,setAmount] = useState(1);

  const setDecrease = () =>{
    amount > 1 ? setAmount(amount-1) : setAmount(1);
  };
  const setIncrease = () =>{
    setAmount(amount+1);
  };

  return (
    <Wrapper>
        <Select className="selectStyle"
        onChange={setSelectedOption}
        options={options}
      />
        <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/>
        <NavLink to="/cart" onClick={() => addToCart(id,size.value,amount,product)}>
            <button className="normal">Add To Cart</button>
        </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section` 

    .selectStyle{
        font-size: 20px;
    }

    button{
        background-color: #222;
        color: #fff;
        border-radius: 50px;
    }
`;

export default AddToCart;