import "./FooterTopp.css";

const FooterTopp = () => {
  return (
    <div className="footer-topp">
      <div className="container">
        <div className="footer-topp-wrapper">
          <div className="containerr">
            <h2 className="title">
              Bizning mobil ilovamiz AppGallery, App Store va Google Play-da
            </h2>
            <div className="button-group">
              <a href="#" className="button app-store">
                <img
                  style={{ width: "130px", height: "32px" }}
                  src="https://olcha.uz/_nuxt/appstore.BZyLL41o.svg"
                  alt="Apple"
                  className="icon"
                />
              </a>

              <a href="#" className="button google-play">
                <img
                  src="https://olcha.uz/_nuxt/googleplay.CcPmyygm.svg"
                  alt="googleplay"
                />
              </a>

              <a href="#" className="button app-gallery">
                <img
                  src="https://olcha.uz/_nuxt/app-gallery.5qhZx5qb.svg"
                  alt="app-gallery"
                />
              </a>
            </div>
          </div>
          <img
            className="end-img"
            src="https://olcha.uz/_nuxt/footer-img.CkueetuY.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTopp;
