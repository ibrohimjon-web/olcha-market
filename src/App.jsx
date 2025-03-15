import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import Home from "./pages/Home/Home";
import Savat from "./pages/savat/Savat";
import Taqqoslash from "./pages/taqqoslash/Taqqoslash";
import Kirish from "./pages/kirish/Kirish";
import Sevimlilar from "./pages/sevimlilar/Sevimlilar";
import FooterMain from "./components/footer/FooterMain";
import SingleCard from "./pages/SingleCard/SingleCard";

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
    </div>
  );
}

export default App;
