import { useState } from "react";
import "./ShowCart.css";

const ShowCart = ({ cart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  let totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  ).toFixed(2);

  return (
    <div className="relative">
      <button
        onClick={() => toggleModal()}
        className="bg-blue-500 text-white text-2xl font-bold py-2 px-4 rounded-lg"
      >
        Show Cart
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center modal-overlay bg-white bg-opacity-90 z-50">
          <div className="modal active bg-white p-4 rounded-lg shadow-md max-w-4xl max-h-4xl overflow-auto">
            <span
              className="close absolute top-2 right-2 cursor-pointer"
              onClick={() => toggleModal()}
            >
              Close
            </span>
            <h2 className="text-2xl font-bold mb-4">Cart Items: {cart.length}</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <h3 className="text-2xl font-bold mt-4">Total: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCart;
