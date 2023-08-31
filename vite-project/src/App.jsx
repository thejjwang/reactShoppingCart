// app component should hold useState and renders ProductList
// should have state for the cart, 
// app will have product arr
// productList only mapping over the products and displaying a product component for each item
// product component will render each single product with name, price, button 
// show cart by having a display component use modal for cart

import { useState } from 'react'
import './App.css'
import ProductList from './ProductList';

let productArr = [
  {name: "apple", price: "1.00"},
  {name: "shirt", price: "20.00"},
  {name: "milk", price: "2.99"},
  {name: "water", price: "0.50"},
  {name: "beer", price: "4.99"},
  {name: "steak", price: "15.00"}
];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className='header'>
        <h1>Shopping List</h1>
      </div>
      <ProductList setCart={setCart} productArr={productArr}/>
      <div className='modal'>
        {cart.map((product) => <p>{product}</p>)}
        {/* something to display cart */}
      <div className='showCart'>
        <button onClick={() => {}}>Show Cart</button>
      </div>
      </div>
    </>
  )
}

export default App
