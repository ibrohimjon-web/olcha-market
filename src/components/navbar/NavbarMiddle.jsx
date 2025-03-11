import "./NavbarMiddle.css";
import { BsFillTelephoneFill } from "react-icons/bs";

const NavbarMiddle = () => {
  return (
    <div className="navbar-middle">
      <div className="container">
        <div className="navbar-middle-wrapper">
          <div className="navbar-middle-text-left">
            <ul>
              <li>
                <a className="a1" style={{ color: "#da002bff" }} href="#">
                  0% Muddatli to'lov
                </a>
              </li>
              <li>
                <a href="#">Chegirmalar</a>
              </li>
              <li>
                <a className="a1" style={{ color: "#da002bff" }} href="#">
                  Yutuqli o'yinlar
                </a>
              </li>
              <li>
                <a className="a2" style={{ border: "none" }} href="#">
                  Sayt xaritasi
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-middle-text-right">
            <ul>
              <li>
                <a style={{ border: "none" }} href="#">
                  +998 (71) 202 202 1
                </a>
              </li>
              <li>
                <a href="#">olcha da soting</a>
              </li>
            </ul>
            <div className="lang">
              <ul>
                <li>
                  <a style={{ border: "none", color: "#F4B3C0FF" }} href="/uz">
                    Ўзб
                  </a>
                </li>
                <li>
                  <a style={{ border: "none" }} href="/oz">
                    O'z
                  </a>
                </li>
                <li>
                  <a style={{ border: "none", color: "#F4B3C0FF" }} href="/ru">
                    Рус
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div
            className="media"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BsFillTelephoneFill style={{ fontSize: "25px" }} />
            <h2 style={{ fontSize: "40px", color: "white" }}>olcha</h2>
            <ul>
              <li>
                <a
                  style={{
                    border: "none",
                    textDecoration: "none",
                    color: "black",
                    fontSize: "25px",
                  }}
                  href="/oz"
                >
                  O'z
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMiddle;
