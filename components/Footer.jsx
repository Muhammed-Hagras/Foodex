import React from "react";
import Logo from "../assets/Logo.png";
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import css from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <AiFillFacebook size={45} />
        <AiFillGithub size={45} />
        <AiFillInstagram size={45} />
      </div>
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Foodex</span>
      </div>
    </div>
  );
};

export default Footer;
