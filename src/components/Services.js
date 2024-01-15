import styled from "styled-components";

const Services = () => {

    const Wrapper = styled.section`
    #feature{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      
      #feature .fe-box{
        width: 180px;
        text-align: center;
        padding: 25px 15px;
        box-shadow: 20px 20px 37px rgba(0,0,0,0.03);
        border: 1px solid #cce7d0;
        border-radius: 30px;
        margin: 15px;
      }
      
      #feature .fe-box:hover{
        box-shadow: 10px 10px 54px rgba(70,62,221,0.1);
      }
      
      #feature .fe-box img{
        width: 100%;
        margin-bottom: 10px;
      }
      
      #feature .fe-box h6{
        display: inline-block;
        padding: 9px 8px 6px 8px;
        line-height: 1;
        border-radius: 4px;
        color: #088178;
        background-color: #fddde4;
      }
      
      #feature .fe-box:nth-child(2) h6{
        background-color: #cdebbc;
      }
      
      #feature .fe-box:nth-child(3) h6{
        background-color: #d1e8f2;
      }
      
      #feature .fe-box:nth-child(4) h6{
        background-color: #cdd4f8;
      }
      
      #feature .fe-box:nth-child(5) h6{
        background-color: #f6dbf6;
      }
      
      #feature .fe-box:nth-child(6) h6{
        background-color: #fff2e5;
      }
    `;


    return <Wrapper style={{margin:"25px 25px"}}>
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src="https://i.postimg.cc/x13PvxMh/f1.png" alt=""/>
                <h6>Free Shipping</h6>
            </div>
            <div className="fe-box">
                <img src="https://i.postimg.cc/q7BxjsGR/f2.png" alt=""/>
                <h6>Online Order</h6>
            </div>
            <div className="fe-box">
                <img src="https://i.postimg.cc/B6XcGJkf/f4.png" alt=""/>
                <h6>Promotions</h6>
            </div>
            <div className="fe-box">
                <img src="https://i.postimg.cc/65sVDJhF/f5.png" alt=""/>
                <h6>Happy Sell</h6>
            </div>
            <div className="fe-box">
                <img src="https://i.postimg.cc/L6zkSCC5/f6.png" alt=""/>
                <h6>F24/7 Support</h6>
            </div>
        </section>
    </Wrapper>;
}
 
export default Services;