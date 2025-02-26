import React from 'react';
import { Link } from "react-router-dom";
import Produto from "./Produto";
import ProdutoH from "./ProdutoH";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import axios from "axios";

const categorias = [
  "Todas as Categorias",
  "Compacto com AR",
  "Econômico com AR",
  "Econômico Sedan AR",
  "Sedan Automático",
  "SUV Compacto",
  "Pick-UP com AR Plus"
];

function FilterMenuLeft({ marcas, anos, setFiltros, applyFilters, clearFilters2 }) {
  const [marcaSelecionada, setMarcaSelecionada] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState([]);

  const toggleMarca = (marca) => {
    setMarcaSelecionada((prev) =>
      prev.includes(marca) ? prev.filter((m) => m !== marca) : [...prev, marca]
    );
  };

  const toggleAno = (ano) => {
    setAnoSelecionado((prev) =>
      prev.includes(ano) ? prev.filter((a) => a !== ano) : [...prev, ano]
    );
  };

  useEffect(() => {
    setFiltros({ marcaSelecionada, anoSelecionado });
  }, [marcaSelecionada, anoSelecionado]);

  const clearFilters = () => {
    setMarcaSelecionada([]);
    setAnoSelecionado([]);
    applyFilters();
  };

  const handleClearFilters = () => {
    clearFilters();
    clearFilters2();
    applyFilters();
  };

  return (
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item">
        <h5 className="mt-1 mb-1">Marcas</h5>
        <div className="d-flex flex-column">
          {marcas.map((v, i) => (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={marcaSelecionada.includes(v)}
                onChange={() => toggleMarca(v)}
              />
              <label className="form-check-label" htmlFor={`flexCheckDefault${i}`}>
                {v}
              </label>
            </div>
          ))}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-2">Anos</h5>
        <div className="d-flex flex-column">
          {anos.map((ano, i) => (
            <div key={i} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={anoSelecionado.includes(ano)}
                onChange={() => toggleAno(ano)}
              />
              <label className="form-check-label" htmlFor={`flexCheckDefaultAno${i}`}>
                {ano}
              </label>
            </div>
          ))}
        </div>
      </li>
      <li className="list-group-item">
        <h5 className="mt-1 mb-2">Price Range</h5>
        <div className="d-grid d-block mb-3">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Min"
              defaultValue="100"
              disabled
            />
            <label htmlFor="floatingInput">Preço Mínimo</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Max"
              defaultValue="800"
              disabled
            />
            <label htmlFor="floatingInput">Preço Máximo</label>
          </div>
          <button className="btn btn-dark btn-sm" onClick={applyFilters}>
            Aplicar Filtro
          </button>
          <button className="btn btn-ligth border-dark btn-sm" onClick={handleClearFilters}>
            Limpar Filtros
          </button>
        </div>
      </li>
    </ul>
  );
}

function ProductList() {
  const [viewType, setViewType] = useState({ grid: true });
  const [carros, setCarros] = useState([]);
  const [filtros, setFiltros] = useState({
    marcaSelecionada: [],
    anoSelecionado: []
  });
  const [termoBusca, setTermoBusca] = useState("");
  const [marcasDisponiveis, setMarcasDisponiveis] = useState([]);
  const [anosDisponiveis, setAnosDisponiveis] = useState([]);

  useEffect(() => {
    fetchOpcoesFiltros();
    fetchCarros();
  }, []);

  const fetchOpcoesFiltros = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/carros`);
      const carros = response.data;

      const marcasUnicas = [...new Set(carros.map(carro => carro.marca))];
      const anosUnicos = [...new Set(carros.map(carro => carro.ano))];

      setMarcasDisponiveis(marcasUnicas);
      setAnosDisponiveis(anosUnicos);
    } catch (error) {
      console.error("Erro ao buscar opções de filtros:", error);
    }
  };

  const fetchCarros = async () => {
    try {
      let params = {
        marcas: filtros.marcaSelecionada.join(","),
        anos: filtros.anoSelecionado.join(",")
      };

      if (termoBusca.trim() !== "") {
        params.modelo = termoBusca;
      }

      console.log(params.modelo);
      
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/carros`, { params });
      setCarros(response.data);
    } catch (error) {
      console.error("Erro ao buscar carros:", error);
    }
  };

  const applyFilters = () => {
    fetchCarros();
  };

  const handleSearch = () => {
    fetchCarros();
  };

  const clearFilters2 = () => {
    setTermoBusca("");
    fetchCarros();
  };

  function changeViewType() {
    setViewType({
      grid: !viewType.grid,
    });
  }

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded">
        <ol className="breadcrumb p-3 mb-0">
          <li className="breadcrumb-item">
            <Link
              className="text-decoration-none link-secondary"
              to="/products"
              replace
            >
              Todos as categorias
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Carros
          </li>
        </ol>
      </nav>

      <div className="row mb-3">
        <div className="col-lg-3">
          <div className="border rounded shadow-sm">
            <FilterMenuLeft
              marcas={marcasDisponiveis}
              anos={anosDisponiveis}
              setFiltros={setFiltros}
              applyFilters={applyFilters}
              clearFilters2={clearFilters2}
            />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="d-flex flex-column h-100">
            <div className="row mb-3">
              <div className="col-lg-12 d-flex flex-row">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Buscar carros pelo modelo..."
                    aria-label="search input"
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                  />
                  <button className="btn btn-outline-dark" onClick={handleSearch}>
                    <FontAwesomeIcon icon={["fas", "search"]} />
                  </button>
                </div>
                <button
                  className="btn btn-outline-dark ms-2 d-none d-lg-inline"
                  onClick={changeViewType}
                >
                  <FontAwesomeIcon
                    icon={["fas", viewType.grid ? "th-list" : "th-large"]}
                  />
                </button>
              </div>
            </div>
            <div
              className={
                "row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3 mb-4 flex-shrink-0 " +
                (viewType.grid ? "row-cols-xl-3" : "row-cols-xl-2")
              }
            >
              {carros.map((carro, i) => {
                if (viewType.grid) {
                  return (
                    <Produto key={i} percentOff={i % 2 === 0 ? 15 : null} carro={carro} />
                  );
                } else {
                  return (
                    <ProdutoH key={i} percentOff={i % 2 === 0 ? 15 : null} carro={carro} />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
