import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
    return (
        <MainHeader>
          <NavLink to="/">
            <img src="https://i.postimg.cc/t4sxTBDF/logo.jpg" className="logo" alt="Website logo" />
          </NavLink>
          <Nav />
        </MainHeader>
      );
    };
    
    const MainHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 80px;
    background: #fff;
    box-shadow: 0 5px 15px rgba(0,0,0,0.06);
    z-index: 999;
    position: sticky;
    top: 0;
    left: 0;

    .logo{
        width: 60px;
        height: 100%;
        background-color: #fff;
      }
    `;
    export default Header;