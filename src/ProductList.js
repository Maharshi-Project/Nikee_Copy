import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const ProductList = ({ products }) => {

    return (
        <div className="pro-container">
            {products.map((product) => (
                <div className="pro" key={product.id}>
                   <Link to={`/products/${product.id}`}>
                        <img src={product.image_source} alt=""/>
                        <div className="des">
                            <span>{product.span}</span>
                            <h5>{product.h5}</h5>
                            <Rating initialValue={product.rating} readonly={true} size={25}></Rating>
                            <h4>{product.price}</h4>
                        </div>
                   </Link>
                </div>
            ))}
        </div>
    );
}
 
export default ProductList;