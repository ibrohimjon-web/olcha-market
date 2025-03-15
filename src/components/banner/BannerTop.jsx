import "./BannerTop.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2024-05-27/pBbegfLejqOchYPZP0Hkn1Blo2Ok1jfNFBq46vRZ0YQ0LT35CC5mffcXaa7r.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/X67IFeWIUVCgKMgNaV6tIyyMIECqnIXy1p25jVpbUB7YEGtGdZbqtZBT4UiU.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-01-23/pEHchQ84G31MgdC2c4eyoAua5ZQAlEKhLPjDCBwqTD4xOMigq4TjevYkEHFi.png",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-03-13/agkCl3PQYlkaDi9GaSDgvc5Bj9X5bNWYadcQ2Fs7AlsXaT5clDrBPaBrML3c.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-10/eBKJbU0Db1UU3wpysrb33ngKT3XnD4bF3PTJdIutW8uIHIM9zFgzSCTK77th.jpg",
];

const BannerTop = () => {
  return (
    <div className="banner-top">
      <div className="container">
        <div className="banner-top-wrapper">
          <div className="banner-top-swiper">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              className="mySwiper"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    style={{ width: "100%" }}
                    src={img}
                    alt={`Banner ${index + 1}`}
                    className="banner-img"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="banner-top-cart">
            <h3>Kun mahsulotlari</h3>
            <img
              style={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "40px",
              }}
              src="https://olcha.uz/image/700x700/products/cdn_1/supplier/stores/1/2025-03-06/3wQR3LXeKGlqiM8hNgtEiu7SfjNf12RtB7tR0nHcYwKr6kOxw3K41MwcRdYJ.jpg"
              alt=""
              className="banner-img"
            />
            <h3>Simsiz quloqchinlar Huawei FreeBuds SE 3 Black</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <p style={{ color: "red", margin: "10px 0 0 0 " }}>
                319 000 so'm
              </p>{" "}
              <del>550 000 so'm</del>
            </div>
            <mark style={{ marginTop: "50px 0" }}>38 000 so'm x 12 oy</mark>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
