import React from "react";

function EmptyCart() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] text-center">
      <div className="flex items-center">
        <span className="text-9xl">{"{"}</span>
        <h3 className="text-5xl">Your cart is empty</h3>
        <span className="text-9xl">{"}"}</span>
      </div>
    </div>
  );
}

export default EmptyCart;
