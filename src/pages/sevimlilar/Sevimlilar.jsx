import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishies } from "../../context/likeSlice";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { incCart } from "../../context/cartSlice";
import "./Sevimlilar.css";

const Sevimlilar = () => {
  const sevimlilar = useSelector((state) => state.likes.value || []);
  const dispatch = useDispatch();

  return (
    <div className="wishes">
      <div className="container">
        {sevimlilar.length > 0 ? (
          <div className="wishes-wrapper">
            {sevimlilar.map((item, index) => {
              const isLiked = sevimlilar.some((el) => el.id === item.id);
              return (
                <div key={`${item.id}-${index}`} className="product-item">
                  {/* Yurak tugmasi */}
                  <FaHeart
                    className={`product-heart ${isLiked ? "liked" : "like"}`}
                    onClick={() => dispatch(removeFromWishies(item))}
                  />

                  {/* Mahsulot rasmi */}
                  <Link to={`product/${item.id}`}>
                    <img
                      className="product-img"
                      src={item.url}
                      alt={item.model}
                    />
                  </Link>

                  {/* Mahsulot ma'lumotlari */}
                  <Link to={`product/${item.id}`}>
                    <h3>{item.model}</h3>
                    <p>{item.category}</p>
                    <mark className="product-mark">
                      {item.oyiga} so'm/oyiga
                    </mark>
                  </Link>

                  {/* Savatga qo'shish tugmasi */}
                  <div className="product-price">
                    <FaCartPlus
                      className="product-buy"
                      onClick={() => dispatch(incCart(item))}
                    />
                  </div>
                  <button className="product-buy-wrapperr">
                    Muddatli to'lov
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="wishes-wrapper"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "300px", height: "300px" }}
              src="https://olcha.uz/_nuxt/empty-img.CsNCz2BZ.png"
              alt=" Icon"
            />

            <h1>Sevimli mahsulotlar yo'q</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sevimlilar;
