import { useRecoilValue } from "recoil";
import { cartState } from "../states/cartState";
import { useState } from "react";
import { useRecoilState } from "recoil";
export default function CartInFo() {
  const cart = useRecoilValue(cartState);
  const [carts, setCart] = useRecoilState(cartState);
  const handleAddtoCart = (product) => {
    const newCart = addToCart(cart, product);
    setCart(newCart);
  };
  const removeCart = () => comer
  return (
    <div>
      <h2> Card Info:</h2>
      {cart.map((item) => {
        return (
          <div className = "flex">
            <li key={item.id}>
              {" "}
              - {item.product.price}: {item.quantity}{" "}
            </li>
            <img className = "w-5 h-5" src = {item.product.image} />
            <button onClick={() => setquantity(quantity + 1)}> x </button>
          </div>
        );
      })}
    </div>
  );
}
