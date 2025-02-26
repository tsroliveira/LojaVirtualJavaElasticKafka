import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Produto({ carro }) {
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
        <Link to={`/products/${carro.id}`} replace>
          {percentOff}
          <img
            className="card-img-top bg-dark cover"
            height="100%"
            alt={carro.modelo}
            src={imgSrc}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            {carro.modelo}
          </h5>
          <p className="card-text text-center text-muted mb-0">{offPrice}</p>
          <div className="d-grid d-block">
            <Link to={`/products/${carro.id}`} className="btn btn-outline-dark" replace>
              <FontAwesomeIcon icon={["fas", "car"]} />&nbsp; Visualizar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produto;
