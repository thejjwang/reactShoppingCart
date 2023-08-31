import Product from "./Product";

const ProductList = ({productArr}) => {
    
  return (
    <>
      {productArr.forEach((product) => (
        <Product product={product}/>
      ))}
    </>
  );
};

export default ProductList;
