import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incCart } from "../../context/cartSlice.js";
import { addToWishies, removeFromWishies } from "../../context/likeSlice";
import { DATA } from "../../mock/index.js";
import "./Product.css";
import { IoStatsChart } from "react-icons/io5";

const Product = () => {
  const dispatch = useDispatch();
  const wishes = useSelector((state) => state.likes.value);

  const handleLike = (item) => {
    if (wishes.some((el) => el.id === item.id)) {
      dispatch(removeFromWishies(item));
    } else {
      dispatch(addToWishies(item));
    }
  };

  return (
    <div className="product">
      <div className="container">
        <div className="product-wrapper">
          {DATA.map((item) => {
            const isLiked = wishes.some((el) => el.id === item.id);

            return (
              <div key={item.id} className="product-item">
                <div className="product-chart-con">
                  <FaHeart
                    className={`product-heart ${isLiked ? "liked" : "like"}`}
                    onClick={() => handleLike(item)}
                  />
                </div>
                <div className="product-chart-con1">
                  <Link to={"taqqoslash"}>
                    <IoStatsChart className="product-chart" />
                  </Link>
                </div>
                <Link to={`product/${item.id}`}>
                  <img
                    className="product-img"
                    src={item.url}
                    alt={item.model || "Product Image"}
                  />
                </Link>
                <Link to={`product/${item.id}`} className="product-info">
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <mark className="product-mark">{item.oyiga} so'm/oyiga</mark>
                </Link>
                <div className="product-actions">
                  <FaCartPlus
                    className="product-buy"
                    onClick={() => dispatch(incCart(item))}
                  />
                  <button className="mud-tulov">Muddatli to'lov</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
