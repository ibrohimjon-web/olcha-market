import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterTopp from "./FooterTopp";
import FooterBottom from "./FooterBottom";

const FooterMain = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="footer-main-wrapper">
          <FooterTop />
          <FooterMiddle />
          <FooterTopp />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
