import "./Home.css";
import BannerMain from "../../components/banner/BannerMain";
import MainMain from "../../components/main/MainMain";
import Product from "../../components/product/Product";
import FooterMain from "../../components/footer/FooterMain";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-wrapper">
          <BannerMain />
          <Product />
          <MainMain />
          <FooterMain />
        </div>
      </div>
    </div>
  );
};

export default Home;
