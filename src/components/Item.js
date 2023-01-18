import React, {useState} from "react";

function Item({ name, category }) {
  const[cart,setCart]=
  useState(false);

  function cartClick(){
    setCart(!cart);
  }
  return (
    <li className={cart ? "in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button
      className={cart ? "remove" : "add"}
      onClick={cartClick}
    >
      {cart ? "Remove From" : "Add to"} Cart
    </button>
  </li>




    
  );
}

export default Item;
