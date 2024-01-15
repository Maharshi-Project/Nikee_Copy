import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button className="normal">Go Back to Home</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    .normal{
        background-color: transparent;
        color:rgb(97, 0, 182);
        border: 0;
        padding: 14px 80px 14px 65px;
        background-repeat: no-repeat;
        cursor: pointer;
        font-weight: 700;
        font-size: 20px;
        
      }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;