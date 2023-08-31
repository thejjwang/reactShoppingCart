import Product from "./Product";

const ProductList = ({productArr}) => {

  return (
    <>
      {productArr.map((product, index) => (
        <Product key={index} product={product}/>
      ))}
    </>
  );
};

export default ProductList;
