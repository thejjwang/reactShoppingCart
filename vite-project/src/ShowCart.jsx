import { useState } from "react";

const ShowCart = ({ cart }) => {
  const updateCart = (cart) => {};

  return (
    <div className="modal">
      <button
        onClick={() => {
          updateCart({ cart });
        }}
      >
        Show Cart
      </button>
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default ShowCart;
