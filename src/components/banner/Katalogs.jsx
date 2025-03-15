import React, { memo } from "react";
import { Link } from "react-router-dom";
import { CATEGORY } from "../../mock/category.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Katalog.css";

const Katalogs = () => {
  return (
    <div className="catalog-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={12}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 4 },
          480: { slidesPerView: 5 },
          640: { slidesPerView: 7 },
          768: { slidesPerView: 9 },
          1024: { slidesPerView: 12 },
        }}
      >
        {CATEGORY.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/products?katalog=${item.id}`} className="category-card">
              <div className="category-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(Katalogs);
