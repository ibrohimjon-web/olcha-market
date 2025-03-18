import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import FooterMain from "./components/footer/FooterMain";
import NavbarMain from "./components/navbar/NavbarMain";
import Home from "./pages/Home/Home";
import Kirish from "./pages/kirish/Kirish";
import Savat from "./pages/savat/Savat";
import Sevimlilar from "./pages/sevimlilar/Sevimlilar";
import SingleCard from "./pages/SingleCard/SingleCard";
import Taqqoslash from "./pages/taqqoslash/Taqqoslash";

function App() {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, [location.pathname]); // Har safar sahifa o'zgarsa, qayta tekshiradi

  return (
    <div>
      {isAuthenticated && <NavbarMain />}
      <Routes>
        {/* Agar user login qilmagan bo‘lsa, faqat "Kirish" sahifasiga ruxsat beriladi */}
        {!isAuthenticated ? (
          <>
            <Route
              path="/kirish"
              element={<Kirish setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="*" element={<Navigate to="/kirish" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/savat" element={<Savat />} />
            <Route path="/taqqoslash" element={<Taqqoslash />} />
            <Route path="/sevimlilar" element={<Sevimlilar />} />
            <Route path="/home/product/:id" element={<SingleCard />} />
          </>
        )}
      </Routes>
      {isAuthenticated && <FooterMain />}
      <ToastContainer />
    </div>
  );
}

export default App;
