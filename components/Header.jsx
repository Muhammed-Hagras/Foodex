import React from "react";
import css from "../styles/Header.module.css";
import Logo from "../assets/FoodexLogo.png";
import Image from "next/image";
import { useStore } from "../store/store";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  // const state = useStore((state) => state);
  // console.log(state);

  const items = useStore((state) => state.cart.pizzas.length);

  return (
    <div className={css.header}>
      {/* Left Side  */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}></Image>
      </div>
      {/* menu side  */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
      {/* right side  */}
      <div className={css.rightSide}>
        <div className={css.cart}>
          <AiOutlineShoppingCart size={35} color="#2e2e2e" />
          <div className={css.cartAmount}>{items}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
