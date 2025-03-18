import React from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { incCart } from "../../context/cartSlice";
import { addToWishies, removeFromWishies } from "../../context/likeSlice";
import "./Sevimlilar.css";
import { IoStatsChart } from "react-icons/io5";

const Sevimlilar = () => {
  const sevimlilar = useSelector((state) => state.likes.value || []);
  const dispatch = useDispatch();

  const handleLike = (item) => {
    if (sevimlilar.some((el) => el.id === item.id)) {
      dispatch(removeFromWishies(item)); // Remove ishlashi uchun import qiling!
    } else {
      dispatch(addToWishies(item)); // Add ishlashi uchun import qiling!
    }
  };

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
                  <div className="product-chart-con">
                    <FaHeart
                      className={`product-heart ${isLiked ? "liked" : "like"}`}
                      onClick={() => handleLike(item)}
                    />
                  </div>
                  <div className="product-chart-con1">
                    <Link to={"/taqqoslash"}>
                      <IoStatsChart className="product-chart" />
                    </Link>
                  </div>

                  {/* Mahsulot rasmi */}
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="product-img"
                      src={item.url}
                      alt={item.model}
                    />
                  </Link>

                  {/* Mahsulot ma'lumotlari */}
                  <Link to={`/product/${item.id}`}>
                    <h3>{item.model}</h3>
                    <p>{item.category}</p>
                    <mark className="product-mark">
                      {item.oyiga} so'm/oyiga
                    </mark>
                  </Link>

                  {/* Savatga qo'shish tugmasi */}
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
              alt="Icon"
            />

            <h1>Sevimli mahsulotlar yo'q</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sevimlilar;
