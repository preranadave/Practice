import React, { useState } from "react";
import "./quantity-selector.css";

const QuantitySelector = () => {
  const MIN = 1;
  const MAX = 5;

  const [quantity, setQuantity] = useState(MIN);

  const increaseQty = () => {
    if (quantity < MAX) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > MIN) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="qty-wrapper">
      <button
        className="qty-btn minus"
        onClick={decreaseQty}
        disabled={quantity === MIN}
      >
        -
      </button>

      <span className="qty-value">{quantity}</span>

      <button
        className="qty-btn plus"
        onClick={increaseQty}
        disabled={quantity === MAX}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
