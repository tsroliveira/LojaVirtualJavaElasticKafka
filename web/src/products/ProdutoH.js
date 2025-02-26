import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProdutoH({ carro }) {
  const price = carro.preco;
  let percentOff = null;
  let offPrice = `R$ ${price}`;
  let imgSrc;
  try {
      imgSrc = require(`../img/cars/${carro.imagem}`);
  } catch (error) {
      imgSrc = require('../img/cars/default.png');
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="row g-0">
          <div className="col-4">
            <Link to={`/products/${carro.id}`} replace>
              {percentOff}
              <img
                className="rounded-start bg-dark cover w-100 h-100"
                alt={carro.modelo}
                src={imgSrc}
              />
            </Link>
          </div>
          <div className="col-8">
            <div className="card-body h-100">
              <div className="d-flex flex-column h-100">
                <h5 className="card-title text-dark text-truncate mb-1">
                  {carro.modelo}
                </h5>
                <span className="card-text text-muted mb-2 flex-shrink-0">
                  {offPrice}
                </span>
                <div className="mt-auto d-flex">
                  <Link to={`/products/${carro.id}`} className="btn btn-outline-dark" replace>
                    <FontAwesomeIcon icon={["fas", "car"]} />&nbsp; Visualizar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdutoH;
