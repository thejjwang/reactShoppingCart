// app component should hold useState and renders ProductList
// should have state for the cart, 
// app will have product arr
// productList only mapping over the products and displaying a product component for each item
// product component will render each single product with name, price, button 
// show cart by having a display component use modal for cart

import { useState } from 'react'
import './App.css'
import ProductList from './ProductList';
import ShowCart from './ShowCart';


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
      <div className='eachItem'>
        {cart.map((product) => <p>{product}</p>)}
      <ShowCart cart={cart}/>
      </div>
    </>
  )
}

export default App
