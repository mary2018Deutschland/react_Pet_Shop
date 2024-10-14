import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/basket.svg";
import Nav from "../nav";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function HandleClick() {
    navigate("/basket");
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <NavLink to="/">
          <img src={logo} />
        </NavLink>
      </div>
      <div>
        <Nav />
      </div>
      <div className={styles.headercart}>
        <img src={cart} onClick={HandleClick} />
      </div>
    </header>
  );
};
export default Header;
