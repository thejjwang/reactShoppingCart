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


// let productArr = [
//   {name: "apple", price: "1.00"},
//   {name: "shirt", price: "20.00"},
//   {name: "milk", price: "2.99"},
//   {name: "water", price: "0.50"},
//   {name: "beer", price: "4.99"},
//   {name: "steak", price: "15.00"}
// ];

function App() {
  const [cart, setCart] = useState([]);
  const [userItem, setUserItem] = useState([]);
  const [userPrice, setUserPrice] = useState([]);

  // post 
  const fetchProducts = async () => {
    try {
        let response = await fetch('http://localhost:3000/products', {
          method: "POST",

        });
        let data = await response.json();
        setProducts(data);
    } catch (error){
        console.log("error fetching products:" + error)
    }
}
fetchProducts()
  
  return (
    <>
      <div className='header'>
        <h1>Shopping List</h1>
      </div>
      <div className='addItemContainer'>
        <input onChange={(e)=> setUserItem(e.target.value)} value={userItem} placeholder='Enter Item' />
        <input onChange={(e)=> setUserPrice(e.target.value)} value={userPrice} placeholder='Enter Price' />
        {/* need to make it so button fetch posts the new item and price */}
        <button onClick={()=>console.log("")}>Add Item</button>
      </div>
      <ProductList setCart={setCart}/>
      <ShowCart cart={cart}/>
    </>
  )
}

export default App
