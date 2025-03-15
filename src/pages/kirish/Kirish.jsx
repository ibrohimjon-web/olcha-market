import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Kirish.css";

const Kirish = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctLogin = "admin";
  const correctPassword = "1234";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === correctLogin && password === correctPassword) {
      localStorage.setItem("authToken", "your-token"); // Token saqlash
      setIsAuthenticated(true); // Global autentifikatsiya holatini yangilash
      navigate("/home");
    } else {
      setError("Login yoki parol xato!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Kirish</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Kirish</button>
        </form>
        <div className="login-kanel">
          <h4>Login yoki parol esdan chiq dimi</h4>
          <Link style={{ color: "blue", fontSize: "24px" }} to={"/home"}>
            Shuni bosing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kirish;
