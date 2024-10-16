import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import ToggleButton from '../../ui/button';
import CategoriesList from '../categoriesList';
import Box from '@mui/material/Box';
import Coupon from '../discountCoupon';
import DiscountedProducts from '../discountProd';

function Main() {
  const navigate = useNavigate();

  const { categories } = useSelector(state => state.categories);

  const discountedProducts = categories
    ? categories.flatMap(category =>
        category.data.filter(product => product.discont_price < product.price)
      )
    : [];

  function onClick() {
    navigate('/discounts');
  }

  function onClickToAllCategories() {
    navigate('/categories');
  }
  function onClickToAllDiscont() {
    navigate('/discounts');
  }

  return (
    <main>
      <div className={styles.banerContainer}>
        <div>
          <h1>
            Amazing Discounts <br /> on Pets Products!
          </h1>

          <ToggleButton
            onClick={onClick}
            initialText="Check out"
            toggledText="Check out"
          ></ToggleButton>
        </div>
      </div>

      <div className={styles.categoryContainer}>
        <div
          style={{ display: 'flex', marginBottom: '2.8%', alignItems: 'end' }}
        >
          <h1>Categories</h1>
          <div className={styles.lineCont}></div>
          <span
            className={styles.linkToallCategories}
            onClick={onClickToAllCategories}
          >
            All categories
          </span>
        </div>

        <Box
          className={styles.scrollContainer}
          sx={{
            display: 'flex',
            width: '100%',
            minHeight: 'max-content',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '16px',
            border: 'none',
            gap: '2%',
            scrollbarWidth: 'none',
          }}
        >
          <CategoriesList />
        </Box>
      </div>

      <div className={styles.discountCoupon}>
        <Coupon />
      </div>

      <div className={styles.discountContainer}>
        <div style={{ display: 'flex', alignItems: 'end' }}>
          <h1>Sale</h1>
          <div className={styles.lineCont}></div>
          <span
            className={styles.linkToallCategories}
            onClick={onClickToAllDiscont}
          >
            All sales
          </span>
        </div>
        <Box
          className={styles.scrollContainer}
          sx={{
            display: 'flex',
            width: '100%',
            minHeight: 'max-content',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '16px',
            border: 'none',
            gap: '2%',
            scrollbarWidth: 'none',
          }}
        >
          <DiscountedProducts
            style={{ flexWrap: 'nowrap' }}
            products={discountedProducts}
            visibleItem={4}
            display="none"
          />
        </Box>
      </div>
    </main>
  );
}

export default Main;
