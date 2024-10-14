import { useSelector } from "react-redux";
import Banner from "../components/banner/Banner";
import { Layout } from "../components/layout/layout";

// import Carousel from "../../components/carousel/Carousel";
// import FormD from "../../components/formD/FormD";
// import CarouselSale from "../../components/carouselSale/CarouselSale";

export default function HomePage() {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  console.log(products, categories);

  return (
    <Layout>
      <Banner />
      {/* <Carousel />
        <FormD />
        <CarouselSale /> */}
    </Layout>
  );
}
