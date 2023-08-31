// product component will render each single product with name, price, button 

const Product = ({product, setCart}) => {

    return (
        <div className="product">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => setCart(product)}>Add to Cart</button>
        </div>
    )
}

export default Product;