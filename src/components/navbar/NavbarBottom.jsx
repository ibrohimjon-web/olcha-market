import "./NavbarBottom.css";
import { MdOutlineMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBarChart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const NavbarBottom = () => {
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

            <li>
              <Link to="/savat">
                <SlBasket style={{ fontSize: "25px", color: "black" }} />
                <span style={{ color: "black" }}>Savatcha</span>
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
