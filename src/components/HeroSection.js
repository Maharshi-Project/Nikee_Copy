import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const HeroSection = () => {

    return <Wrapper>
        <section className="banner">
        <h4>Trade-in-offer</h4>
        <h2>Super deals</h2>
        <h1>On all products</h1>
        <p>Upto 40% OFF</p>
        <NavLink  to="/product">
            <button>Show Now</button>
        </NavLink>
        </section>
    </Wrapper>;
};

const Wrapper = styled.section`

    background-image: url("https://i.postimg.cc/RhY702rJ/b1.jpg");
    height: 90vh;
    width: 100%;
    background-position: top 60% left 50%;
    background-size: cover;
    padding: 0 75px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h4{
        padding-bottom: 15px;
        font-size:20px;
    }

    h1{
    color:rgb(127, 24, 218);
    }

    p{
        font-size: 16px;
        color: #465b52;
        margin: 15px 0 20px 0;
      }

    button{
    background-image: url("https://i.postimg.cc/15CFsk09/button.png");
    background-color: transparent;
    color:rgb(97, 0, 182);
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
    }

`;
 
export default HeroSection;