import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

function Cadastro() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, formData);
      console.log("Cadastro successful:", response.data);
      login(response.data.user);
      navigate("/");
    } catch (error) {
      console.error("Cadastro error:", error);
      setError("Ocorreu um erro ao tentar cadastrar. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <br /><h2>Faça seu cadastro</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
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
              <label htmlFor="password" className="form-label">Senha</label>
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
            <button type="submit" className="btn btn-primary">Cadastrar</button>
            <Link to="/" className="btn btn-link">Cancelar</Link>
          </form>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default Cadastro;
