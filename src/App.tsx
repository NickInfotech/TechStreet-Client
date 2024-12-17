import BannerCategories from "./UI/BannerCategories";
import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./UI/HomeBanner";
import Highlights from "./UI/Highlights";
import Categories from "./UI/Categories";
import ProductList from "./UI/ProductList";
import DiscountedBanner from "./UI/DiscountedBanner";
import Blog from "./UI/Blog";

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Highlights />
      <Categories />
      {/* Product List */}
      <ProductList />
      {/* Discounted Banner */}
      <DiscountedBanner />
      {/* Blog */}
      <Blog />
    </main>
  );
}

export default App;
