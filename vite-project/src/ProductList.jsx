import Product from "./Product";

const ProductList = ({productArr}) => {
  return (
    <>
      {productArr.forEach((product) => (
        <Product />
      ))}
    </>
  );
};

export default ProductList;
