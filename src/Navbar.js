import { Link } from "react-router-dom";
 
const Navbar = () => {
    return (

      <section id="header">
        <Link to="/"><img src="https://i.postimg.cc/t4sxTBDF/logo.jpg" className="logo" alt="" /></Link>
        <div>
        <ul id="navbar">
                <li><Link className="active" to="/">Home</Link></li>
                {/* <li><Link to="">Contact</Link></li> */}
                <li><Link to="/profile">User</Link></li>
                <li id="lg-bag"><Link to="/cart"><img id="cart-logo" width="100%" height="20px" src="https://i.postimg.cc/Cx9ffb6X/shopping-cart.png"/></Link></li>
                {/* <Link to="#" id="close"><i className="far fa-times"></i></a> */}
            </ul>
        </div>
      </section>
    );
  }

  export default Navbar;