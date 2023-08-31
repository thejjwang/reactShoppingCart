import { useState } from "react";

const ShowCart = ({ cart }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

  return (
    <div className="modal">
      <button onClick={() => toggleModal()}>
        Show Cart
      </button>
      {isModalOpen && (
        <div className="modal-content">
        <span className="close">&times;</span>
        <h2>Cart Items: {cart.length}</h2>
        <ul>
            {cart.map((item, index) => 
            <li key={index}>{item.name} - ${item.price}</li>)}
        </ul>
      </div>
      )}
    </div>
  );
};

export default ShowCart;
