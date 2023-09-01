import { useState } from "react";   
import './ShowCart.css';

const ShowCart = ({ cart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    //The reduce method is used to perform a specific operation on all elements 
    // of an array and accumulate the result into a single value. It's like 
    //"reducing" the array to a single value by applying an operation to each element.
    let totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)
  return (
    <div className="modal">
      <button onClick={() => toggleModal()}>
        Show Cart
      </button>
      {isModalOpen && (
        <div className="modal-content">
        <span className="close"></span>
        <h2>Cart Items: {cart.length}</h2>
        <ul>
            {cart.map((item, index) => 
            <li key={index}>{item.name} - ${item.price}</li>)}
        </ul>
        <h3>Total: ${totalPrice}</h3>
      </div>
      )}
    </div>
  );
};

export default ShowCart;
