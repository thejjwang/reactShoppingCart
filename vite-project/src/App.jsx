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

  const addItemToDb = async (userItem, userPrice) => {
    try {
      if (isNaN(userPrice)) {
        console.log('Invalid price input');
        return;
      }
      const newItem = {
        name: userItem,
        price: parseFloat(userPrice).toFixed(2),
        id: products.length,
      };

      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      setProducts((prevProducts) => [...prevProducts, newItem]);
      setUserItem("");
      setUserPrice("");
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
          setProducts(data);
          console.log(products);
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
      <div className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2xl font-bold">Shopping List</h1>
      </div>
      <div className="flex justify-center mt-4 mb-10 mt-10">
        <input
          onChange={(e) => setUserItem(e.target.value)}
          value={userItem}
          placeholder="Enter Item"
          type="text"
        />
        <input
          onChange={(e) => setUserPrice(e.target.value)}
          value={userPrice}
          placeholder="Enter Price"
          type="number"
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
