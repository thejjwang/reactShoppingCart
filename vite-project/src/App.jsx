// app component should hold useState and renders ProductList
// should have state for the cart,
// app will have product arr
// productList only mapping over the products and displaying a product component for each item
// product component will render each single product with name, price, button
// show cart by having a display component use modal for cart

import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ShowCart from "./ShowCart";
import "./index.css";

function App() {
  const [cart, setCart] = useState([]);
  const [userItem, setUserItem] = useState("");
  const [userPrice, setUserPrice] = useState("");
  const [products, setProducts] = useState([]);

  const addItemToDb = async (itemName, itemPrice) => {
    try {
      const newItem = {
        name: itemName,
        price: parseFloat(itemPrice).toFixed(2),
        id: products.length 
      };

      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        setProducts((prevProducts) => [...prevProducts, newItem]);
        setUserItem(""); // Clear the input field for item name
        setUserPrice(""); // Clear the input field for item price
      } else {
        console.log("Failed to add item to the database");
      }
    } catch (error) {
      console.log("Error adding item:", error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Update the state with the products array
          console.log(products)
        } else {
          console.log("Failed to fetch products");
        }
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Shopping List</h1>
      </div>
      <div className="addItemContainer">
        <input
          onChange={(e) => setUserItem(e.target.value)}
          value={userItem}
          placeholder="Enter Item"
        />
        <input
          onChange={(e) => setUserPrice(e.target.value)}
          value={userPrice}
          placeholder="Enter Price"
        />
        <button onClick={() => addItemToDb(userItem, userPrice)}>
          Add Item
        </button>
      </div>
      <ProductList setCart={setCart} products={products} />
      <ShowCart cart={cart} />
    </>
  );
}

export default App;
