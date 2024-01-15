import styled from "styled-components";

const Banner = () => {

    const Wrapper =  styled.section`
    
    #banner{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-image: url("https://i.postimg.cc/02LG1gdL/b2.jpg");
        width: 100%;
        height: 40vh;
        background-size: cover;
        background-position: center;
      }
      
      #banner h4{
        color: #fff;
        font-size: 16px;
      }
      
      #banner h2{
        color: #fff;
        font-size: 30px;
        padding: 10px 0;
      }
      
      #banner h2 span{
        color: #ef3636;
      }
      
      #banner button:hover{
        background-color: #088178;
        color: #fff;
      }
      
      #newletter{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        /* background-image: url(https://i.postimg.cc/02LG1gdL/b14.jpg); */
        background-repeat: no-repeat;
        background-position: 20% 30%;
        background-color: #041e42;
        padding: 50px 60px;
      }
      
      #newletter h4{
        font-size: 22px;
        font-weight: 700;
        color: #fff;
      }
      
      #newletter p{
        font-size: 14px;
        font-weight: 600;
        color: #828ea0;
      }
      
      #newletter span{
        color: #ffbd27;
      }
      
      #newletter .form{
        display: flex;
        width: 40%;
      }
      
      #input_email{
        height: 3.125rem;
        padding: 0 1.25em;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      
      #newletter button{
        background-color: #222;
        color: #fff;
        white-space: nowrap;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

    
    `;

    return <Wrapper style={{margin:"25px 0px"}}>
        <>
        <section id="banner" className="section-m1">
            <h4>!! Diwali Offers !!</h4>  
            <h2>Up to <span>30% Off</span> - All Shoes & Accessories</h2>
            <button className="normal">Explore More</button>
        </section>
        </>
    </Wrapper>;
}
 
export default Banner;