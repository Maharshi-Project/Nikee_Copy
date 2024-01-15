import React, {  useEffect } from 'react';
import styled from 'styled-components';
import {  useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useProductContext } from '../context/productcontext';
import FormatPrice from '../Helpers/FormatPrice';
import { Rating } from 'react-simple-star-rating';
import AddToCart from './AddToCart';

const API = "http://localhost:8080/products/"

const SingleProducts = () => {

  const { getSingleProduct, singleProduct } = useProductContext();

  useEffect(() =>{
    getSingleProduct(`${API}/${id}`);
  },[]);

  const { id } = useParams();

  const {
    id:alias,
    image_source,
    title,
    name,
    details,
    rating,
    price,
    reviews
  } = singleProduct;

  


return (
    <Wrapper>
<section id="productDetails" className="section-p1">
        <div className="single-pro-image">
            <img className='main-image' src={image_source} width="100%" id="mainImage" alt=""/>
        </div>

        <div className="single-pro-details">
            <h6>{title}</h6>
            <h4>{name}</h4>
            <div className="star">
            <Rating initialValue={rating} readonly={true} allowFraction="true" size={35}></Rating>
            <p>({reviews} customer reviews)</p>
            </div>
            <h2 className='price'>{<FormatPrice price={price} />}</h2>
            <AddToCart product = {singleProduct}/>
            <h4>Product Details</h4>
            <span>{details}</span>
        </div>
    </section>

    </Wrapper>
  );
};

const Wrapper = styled.section`

h6{
  font-size:20px;
}

#productDetails{
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.star{
  margin-top: 20px;
}

.main-image{
  border-radius:50px;
  
}

#productDetails .single-pro-image{
  width: 50%;
  margin-right: 50px;
}

#productDetails .single-pro-details{
  width: 50%;
  padding-top: 30px;
  padding: 50px;
}

#productDetails .single-pro-details h4{
  padding: 40px 0 20px 0;
  font-size: 30px;
}

#productDetails .single-pro-details h2{
  padding: 10px 0 20px 0;
  font-size: 26px;
}

#productDetails .single-pro-details select{
  display: block;
  width:wrap;
  padding: 5px 10px;
  margin-bottom: 10px;
  font-size: 20px;
}

#productDetails .single-pro-details select:focus{
  outline: none;
}

#productDetails .single-pro-details input{
  width: 10%;
  height: 47px;
  padding-left: 10px;
  font-size: 16px;
  margin-right: 10px;
}

#productDetails .single-pro-details input:focus{
  outline: none;
}

#productDetails .single-pro-details button{
  background-color: #222;
  color: #fff;
  border-radius: 50px;
}

#productDetails .single-pro-details button:hover{
  cursor: pointer;
}

#productDetails .single-pro-details span{
  line-height: 25px;
  font-size: 20px;
}


`;

export default SingleProducts;