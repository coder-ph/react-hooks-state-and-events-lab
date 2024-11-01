import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const[isInCart, setIsInCart] = useState(false)

  function handleCartAdd(){
    setIsInCart((prevState)=> !prevState)
  }

  const itemClass = isInCart? "in-cart" : "";
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartAdd} className="add">{isInCart? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
