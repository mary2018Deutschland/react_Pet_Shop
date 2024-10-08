import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/icons/logo.svg";
import cart from "../../assets/icons/basket.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <a href="#">
          <img src={logo} />
        </a>
      </div>
      <nav className={styles.headerNav}>
        {/*<Link to="/pages/homepage">Main Page</Link>
        <Link to="/pages/categorypage">Categories</Link>
        <Link to="/pages/allproductspage">All Products</Link>
        <Link to="/pages/discountedproductspage">All sales</Link>*/}
        <a href="#">Main Page</a>
        <a href="#">Categories</a>
        <a href="#">All Products</a>
        <a href="#">All sales</a>
      </nav>
      <div className={styles.headercart}>
        <a href="#">
          <img src={cart} />
        </a>
      </div>
    </header>
  );
};
export default Header;
