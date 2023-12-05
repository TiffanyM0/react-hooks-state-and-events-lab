import React, { useState } from "react";

function Item({ name, category }) {

  const [cartName, setCartName] = useState(true)

  const addCart = (()=> setCartName(!cartName))
  
  const classCart = cartName ? "" : "in-cart";

  // console.log(classCart);
  const changeText = cartName ? "Add to Cart" : "Remove from Cart"

  return (
    <li className={classCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{changeText}</button>
    </li>
  );
}

export default Item;
