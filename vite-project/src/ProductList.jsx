import Product from "./Product";

const ProductList = ({productArr, setCart}) => {

  return (
    <div className="productContainer">
      {productArr.map((product, index) => (
        <Product setCart={setCart} key={index} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
