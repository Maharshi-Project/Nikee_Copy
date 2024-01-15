import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper>
      <section id="newletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`

    #newletter{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        background-repeat: no-repeat;
        background-position: 20% 30%;
        background-color: #041e42;
        height: 200px;
        padding: 25px 50px;
    }

    h4{
        font-size: 32px;
        font-weight: 700;
        color: #fff;
    }

    p{
        font-size: 20px;
        font-weight: 600;
        color: #828ea0;
    }

    span{
        color: #ffbd27;
    }

    .form{
        display: flex;
        width: 40%;
    }

    input{
        height: 4rem;
        padding: 0 10px;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    button{
      font-size: 14px;
      font-weight: 600;
      padding: 15px 30px;
      color: #000;
      background-color: #fff;
      border-radius: 4px;
      border: none;
      outline: none;
      transition: 0.2s;
      // curson:pointer;
    }

`;

export default Newsletter;
