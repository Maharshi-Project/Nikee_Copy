import useFetch from "./useFetch";
import ProductList from "./ProductList";

const FeatureProduct = () => {
  const { error, isPending, data: products } = useFetch('http://localhost:8000/products')

  return (
    <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Most Exclusive One!!</p>
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
          { products && <ProductList products = {products}/>}
    </section>
  );
}
 
export default FeatureProduct;