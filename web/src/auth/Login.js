import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, formData);
      login(response.data); 
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setError("Ocorreu um erro ao tentar logar. Por favor, tente novamente.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <br /><h2>Acessar o sistema</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Senha
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Logar
            </button>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default Login;
