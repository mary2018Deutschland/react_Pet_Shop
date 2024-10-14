import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";

function Banner() {
  const navigate = useNavigate();

  function HandleClick() {
    navigate("/discounted_products_page");
  }

  return (
    <div className={styles.mainBanner}>
      <div className={styles.bannerContainer}>
        <h1>Amazing Discounts on Pets Products!</h1>
        <button onClick={HandleClick}>Check out</button>
      </div>
    </div>
  );
}
export default Banner;
