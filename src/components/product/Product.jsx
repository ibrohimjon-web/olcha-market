import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incCart } from "../../context/cartSlice.js";
import { addToWishies, removeFromWishies } from "../../context/likeSlice";
import { DATA } from "../../mock/index.js";
import "./Product.css";

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
                <FaHeart
                  className={`product-heart ${isLiked ? "liked" : "like"}`}
                  onClick={() => handleLike(item)}
                />
                <Link to={`product/${item.id}`}>
                  <img
                    className="product-img"
                    src={item.url}
                    alt={item.model}
                  />
                </Link>
                <Link to={`product/${item.id}`}>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                  <mark className="product-mark">{item.oyiga} so'm/oyiga</mark>
                </Link>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    style={{
                      marginTop: "18px",
                      padding: "2px",
                      border: "1px solid red",
                      backgroundColor: "white",
                      width: "70%",
                      borderRadius: "8px",
                      color: "red",
                    }}
                  >
                    Muddatli to'lov
                  </button>

                  <FaCartPlus
                    style={{
                      fontSize: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      cursor: "pointer",
                    }}
                    className="product-buy"
                    onClick={() => dispatch(incCart(item))}
                  />
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
