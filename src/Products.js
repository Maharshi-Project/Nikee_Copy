import React from "react";
import styled from "styled-components";
import Product from "./components/Product";
import { useProductContext } from "./context/productcontext";

const Products = () => {
  const { isLoading, products } = useProductContext();
  console.log(products);

  if (isLoading) {
    return <div>.... L O A D I N G </div>;
  }

  return (
    <Wrapper className="section">
      <div id="product1">
        <div className="pro-container">
          <h2>Products</h2>
          <div className="pro-container">
            {products.map((curElem) => {
              return <Product key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
#product1{
    text-align: center;  
}

#product1 .pro-container{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-wrap: wrap;
    padding: 0px 55px;
}

#product1 .pro{
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

#product1 .pro img{
    width: 100%;
    border-radius: 20px;
}

#product1 .pro:hover{
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#product1 .pro .des{
    text-align: start;
    padding: 10px 0;
}

#product1 .pro .des span{
    color: #060663;
    font-size: 12px;
}

#product1 .pro .des h5{
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
}

#product1 .pro .des i{
    font-size: 12px;
    color: rgb(243, 181, 25);
}

#product1 .pro .des h4{
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}
`;

export default Products;
