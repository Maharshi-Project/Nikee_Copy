import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();

    const history = useHistory();

    const { data: product, isPanding, error} = useFetch('http://localhost:8080/products/'+id);

    return (
        <div>
            { isPanding && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { product && (
            <div id="productDetails" className="section-p1">
                <div  className="single-pro-image">
                <img src={product.image_source} width="100%" id="mainImage" alt=""/>
    
                <div  className="smallImageGroup">
                    <div  className="smallImageCol">
                        <img src="https://i.postimg.cc/6QL55Rsd/a1.webp" width="100%"  className="smallImage" alt=""/>
                    </div>
                    <div  className="smallImageCol">
                        <img src="https://i.postimg.cc/bJyYGJ84/a2.webp" width="100%"  className="smallImage" alt=""/>
                    </div>
                    <div  className="smallImageCol">
                        <img src="https://i.postimg.cc/9FRmws5X/a3.webp" width="100%"  className="smallImage" alt=""/>
                    </div>
                    <div  className="smallImageCol">
                        <img src="https://i.postimg.cc/7hbxVW5V/a4.webp" width="100%"  className="smallImage" alt=""/>
                    </div>
                    <div  className="smallImageCol">
                        <img src="https://i.postimg.cc/VsHs6mhH/a5.webp" width="100%"  className="smallImage" alt=""/>
                    </div>
                </div>
            </div>

            <div  className="single-pro-details">
            <h6>{product.span}</h6>
            <h4>{product.h5}</h4>
            <h2>{product.price}</h2>
            <select>
                <option>Select Size</option>
                <option>UK 3.5</option>
                <option>UK 4.5</option>
                <option>UK 5</option>
                <option>UK 5.5</option>
                <option>UK 6</option>
                <option>UK 6.5</option>
            </select>
            <input type="number" value="1"/>
            <button  className="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>{product.details}</span>
            </div>
            </div>
            
            )}
        </div>
    );
}
 
export default ProductDetails;