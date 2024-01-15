import React from 'react'
import { useProductContext } from "../context/productcontext";
import styled from 'styled-components';
import Product from './Product';

function FeatureProduct() {

    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts);
    
    if( isLoading )
    {
        return <div>.... L O A D I N G </div>;
    }

    return (
    <Wrapper className="section">
        <div id="product1">
            <h2>Featured Products</h2>
            <p>Most Exclusive One!!</p>
            <div className="pro-container">
                {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} { ...curElem } />;
                })}
            </div>
        </div>
    </Wrapper>);
}

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


    p{
        font-size: 26px;
        color: #465b52;
        margin: 15px 0 20px 0;
    }
    
`;

export default FeatureProduct