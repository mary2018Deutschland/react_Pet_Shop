import "./App.css";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import ProductsByCategoryPages from "./pages/ProductsByCategoryPages";
import AllProductsPage from "./pages/AllProductsPage";
import DiscountedProductsPage from "./pages/DiscountedProductsPage";
import ProductDetailsPages from "./pages/ProductsByCategoryPages";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Basket from "./components/basket/Basket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getProducts } from "./redux/actionCreators";

export const API_URL = "http://localhost:3333";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());

    dispatch(getProducts());
  }, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/all_products" element={<AllProductsPage />} />
        <Route
          path="/discounted_products_page"
          element={<DiscountedProductsPage />}
        />
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/categories/products/:id"
          element={<ProductsByCategoryPages />}
        />
        <Route
          path="/categories/products/details/:id"
          element={<ProductDetailsPages />}
        />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
