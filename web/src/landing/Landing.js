import React from "react";
import Banner from "./Banner";
import ProductsList from "../products/ProductsList";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          Com a Verzel você tem qualidade e conforto a cada viagem. Alugue agora e descubra a diferença de um serviço de excelência.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            Conheça nosos carros
          </Link>
           &nbsp;&nbsp;&nbsp;
          <Link to="/productAdd" className="btn btn-primary" replace>
            Cadastrar veículo
          </Link>
        </div>        
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">Novos Veículos</h2>
      <div className="container pb-5 px-lg-5">
          <ProductsList />
      </div>
      <div className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Siga-nos nas redes sociais</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
