import { AiOutlineBarChart } from "react-icons/ai";
import { CiHeart, CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineMenu } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavbarBottom.css";

const NavbarBottom = () => {
  const cartItems = useSelector((state) => state.carts.value);

  return (
    <div className="navbar-bottom">
      <div className="container">
        <div className="navbar-bottom-wrapper">
          <a href="/">
            <img
              className="navbar-bottom-logo"
              src="https://olcha.uz/_nuxt/plus.lRzD4Jf7.png"
              alt="logo"
            />
          </a>
          <button className="navbar-bottom-btn">
            <MdOutlineMenu style={{ fontSize: "26px" }} />
            <span className="navbar-middle-btn-text">Katalog</span>
          </button>

          <div className="navbar-bottom-search">
            <input type="text" placeholder="Katalog bo'yicha qidiring" />
            <button>
              <CiSearch style={{ color: "white" }} />
            </button>
          </div>

          <ul className="navbar-bottom-end">
            <li>
              <Link to="/taqqoslash">
                <AiOutlineBarChart
                  style={{ fontSize: "25px", color: "black" }}
                />
                <span style={{ color: "black" }}>Taqqoslash</span>
              </Link>
            </li>

            <li>
              <Link to="/sevimlilar">
                <CiHeart style={{ fontSize: "25px", color: "black" }} />
                <span style={{ color: "black" }}>Sevimlilar</span>
              </Link>
            </li>

            <li style={{ position: "relative" }}>
              <Link to="/savat">
                <SlBasket style={{ fontSize: "25px", color: "black" }} />
                <span style={{ color: "black" }}>Savatcha</span>
                <span
                  style={{
                    position: "absolute",
                    color: "white",
                    top: "-10px",
                    right: "0",
                    fontSize: "16px",
                    padding: "5px 10px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                >
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li>
              <Link to="/kirish">
                <GoPerson style={{ fontSize: "25px", color: "black" }} />
                <span style={{ color: "black" }}>Kirish</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
