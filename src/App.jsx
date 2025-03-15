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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated && location.pathname !== "/kirish") {
    return <Navigate to="/kirish" />;
  }

  return (
    <div>
      {isAuthenticated && <NavbarMain />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Kirish setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/kirish"
          element={<Kirish setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/savat" element={<Savat />} />
        <Route path="/taqqoslash" element={<Taqqoslash />} />
        <Route path="/sevimlilar" element={<Sevimlilar />} />
        <Route path="/home/product/:id" element={<SingleCard />} />
      </Routes>
      {isAuthenticated && <FooterMain />}
      <ToastContainer />
    </div>
  );
}

export default App;
