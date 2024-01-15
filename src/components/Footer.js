import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Footer = () => {

    const Wrapper = styled.section`

    .section-m1{
        margin: 40px 0;
      }

    footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      
      footer .col{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
      }
      
      footer .logo{
        margin-bottom: 30px;
      }

      .logo{
        width: 60px;
        height: 100%;
        background-color: #fff;
      }
      
      footer h4{
        font-size: 18px;
        padding-bottom: 20px;
      }
      
      footer p{
        font-size: 15px;
        margin: 0 0 8px 0;
      }
      
      footer a{
        font-size: 15px;
        text-decoration: none;
        color: #222;
        margin-bottom: 10px;
      }
      
      footer .follow{
        margin-top: 20px;
      }
      
      footer .follow i{
        color: #465b52;
        padding-right: 4px;
        cursor: pointer;
      }
      
      footer .intsall .row img{
        border: 1px solid #088178;
        border-radius: 6px;
      }
      
      footer .intsall img{
        margin: 10px 0 15px 0;  
      }
      
      footer .follow i:hover,
      footer a:hover{
        color: #088178;
      }
      
      footer .copyright{
        width: 100%;
        text-align: center;
      }
    `;


    return (
        <Wrapper style={{padding:50}}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>

            <footer className="section-p1">
            <div className="col">
                <img className="logo" src="https://i.postimg.cc/t4sxTBDF/logo.jpg" alt=""/>
                <h4>Contact</h4>
                <p><strong>Address:</strong>XYZ , Street 124, India</p>
                <p><strong>Phone:</strong> +91 12345 69870</p>
                <div className="follow">
                    <h4>Follow Us</h4>
                    <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="col">
                <h4><strong>GET HELP</strong></h4>
                <NavLink to="/cart">Order Status</NavLink>
                <NavLink to="#">Delivery</NavLink>
                <NavLink to="#">Returns</NavLink>
                <NavLink to="#">Payment Options</NavLink>
                <NavLink to="#">Contact Us On Nike.com Inquires</NavLink>
                <NavLink to="#">Contact Us On ALL Others Inquires</NavLink>
            </div>

            <div className="col">
                <h4>ABOUT NIKE</h4>
                <NavLink to="#">News</NavLink>
                <NavLink to="#">Careers</NavLink>
                <NavLink to="#">Investors</NavLink>
                <NavLink to="#">Sustainability</NavLink>
            </div>

            <div className="col install">
                <h4>Intsall App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="https://i.postimg.cc/wxFyQCGh/app.jpg" alt=""/>
                    <img src="https://i.postimg.cc/x1NXYcTR/play.jpg" alt=""/>
                </div>
                <p>Secured Payment Gateways</p>
                <img src="https://i.postimg.cc/sDNMtpyx/pay.png" alt=""/>
            </div>

            <div className="copyright">
                <p>Copyright © 2023 Nike, Inc | All rights reserved</p>
            </div>
        </footer>
        </Wrapper>
    );
}
 
export default Footer;