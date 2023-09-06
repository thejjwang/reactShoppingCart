// product component will render each single product with name, price, button 

const Product = ({ product, setCart }) => {
    return (
      <div className="product">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button className="hover:border-2 border-sky-500" onClick={() => setCart((prevCart) => [...prevCart, product])}>
          Add to Cart
        </button>
      </div>
    );
  };

export default Product; 