import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ display: "flex", gap: "32px" }}>
      <NavLink to="/">Main Page</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/all_products">All products</NavLink>
      <NavLink to="/discounted_products_page">All sales</NavLink>
    </nav>
  );
}

export default Nav;
