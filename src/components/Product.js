import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import FormatPrice from '../Helpers/FormatPrice';
import { Rating } from 'react-simple-star-rating';

const Product = (curElem) => {

    const {id, title, name, image_source, price, rating } = curElem;

  return(
    <NavLink to={`/singleproduct/${id}`} className="pro">
        <Wrapper>
        <img src={image_source} alt=""/>
        <div className="des">
            <span style={{"fontSize":"15px"}}>{title}</span>
            <h5 style={{"fontSize":"20px"}}>{name}</h5>
            <div className="star">
            <Rating initialValue={rating} readonly={true} size={25}></Rating>
            </div>
            <h4 style={{"fontSize":"15px"}}>{<FormatPrice price={price} />}</h4>
        </div>
        </Wrapper>
    </NavLink>
  );
}

const Wrapper = styled.section`

    .pro{
        width: 23%;
        min-width: 250px;
        padding: 10px 12px;
        border: 1px solid #cce7d0;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
        margin: 15px 0;
        transition: 0.2s ease;
        position: relative;
    }  
`;

export default Product