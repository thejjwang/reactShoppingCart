// product component will render each single product with name, price, button 

const Product = ({product}) => {

    return (
        <div className="product">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
        </div>
    )
}

export default Product;