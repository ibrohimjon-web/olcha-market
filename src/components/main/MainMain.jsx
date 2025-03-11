import MainTop from "./MainTop";
import MainBottom from "./MainBottom";

const MainMain = () => {
  return (
    <div className="main-main">
      <div className="container">
        <div className="main-main-wrapper">
          <MainTop />
          <MainBottom />
        </div>
      </div>
    </div>
  );
};

export default MainMain;
