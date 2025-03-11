import "./NavbarTop.css";

const NavbarTop = () => {
  return (
    <div className="navbar-top">
      <div className="container">
        <div className="navbar-top-wrapper">
          <div className="navbar-top-img">
            <img
              src="https://olcha.uz/uploads/advertising/images/top/7xlobVcBgEnWvETyrySM2DwRBppXsL9iqn0ps8Bc.jpg"
              alt="navbar top img "
            />
          </div>

          <div className="navbar-top-text-wrapper">
            <div className="navbar-top-text-logo">
              <img
                src="https://olcha.uz/_nuxt/app-logo.CBV98dim.png"
                alt="navbar-top-text-logo"
              />
              <div className="navbar-top-text">
                <h2 className="navbar-top-text-h2">Olcha</h2>
                <p className="navbar-top-text-p">Скачать приложение</p>
              </div>
            </div>
            <a className="navbar-top-text-button" href="/">
              Скачать
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
