import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'

const AppToCart = ({ product }) => {

    const {id, size} = product;

  return (
    // <Wrapper>
    //   div.
    // </Wrapper>
    <div>
      <NavLink to="/cart">
          <button className='normal'>Add To Cart</button>
      </NavLink>
    </div>
  );
}

export default AppToCart