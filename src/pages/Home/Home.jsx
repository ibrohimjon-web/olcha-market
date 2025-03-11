import "./Home.css";
import BannerMain from "../../components/banner/BannerMain";
import MainMain from "../../components/main/MainMain";
import Product from "../../components/product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <BannerMain />
          <Product />
          <MainMain />
        </div>
      </div>
    </div>
  );
};

export default Home;
