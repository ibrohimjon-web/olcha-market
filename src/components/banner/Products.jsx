import React from "react";
import { useLocation } from "react-router-dom";
import { DATA } from "../../mock/index.js";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const katalogId = searchParams.get("katalog"); // ?katalog=1 bo'lsa => 1

  // Faqat tanlangan katalogga tegishli mahsulotlarni olish
  const filteredProducts = katalogId
    ? DATA.filter((item) => item.categoryId === Number(katalogId))
    : DATA;

  return (
    <div className="products-wrapper">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
        <p>Bu katalogda mahsulot yo'q!</p>
      )}
    </div>
  );
};

export default Products;
