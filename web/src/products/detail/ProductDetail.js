import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ScrollToTopOnMount from '../../template/ScrollToTopOnMount';
import RelatedProduct from './RelatedProduct';
import Ratings from 'react-ratings-declarative';
import { formatCurrency, formatMileage } from '../../utils/functions';

const iconPath =
  'M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z';

const ProductDetail = () => {
  const { id } = useParams();
  const [carro, setCarro] = useState({
    marca: '',
    modelo: '',
    ano: '',
    preco: '',
    quilometragem: '',
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/carros/${id}`)
      .then((response) => {
        const { marca, modelo, ano, preco, quilometragem, imagem } = response.data;
        setCarro({
          marca,
          modelo,
          ano,
          preco: formatCurrency(preco.toString()),
          quilometragem: formatMileage(parseInt(quilometragem)),
          imagem,
        });
      })
      .catch((error) => console.error('Erro ao buscar dados do carro:', error));
  }, [id]);

  let imgSrc;
  try {
    imgSrc = require(`../../img/cars/${carro.imagem}`);
  } catch (error) {
    imgSrc = require('../../img/cars/default.png');
  }

  function changeRating(newRating) {}

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/products">
              Todos os carros
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {carro.marca} {carro.modelo}
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {Array.from({ length: 6 }, (_, i) => {
                let selected = i !== 1 ? "opacity-6" : "";
                return (
                  <a key={i} href="!#">
                    <img
                      className={"rounded mb-2 ratio " + selected}
                      alt=""
                      src={imgSrc}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={imgSrc}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">{carro.marca} {carro.modelo}</h2>
            <h4 className="text-muted mb-4">10000 Ks</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <Link to={`/`} className="btn btn-outline-dark py-2 w-100" replace>
                  Voltar
                </Link>
              </div>
              <div className="col">
                <Link to={`/productsUpdate/${id}`} className="btn btn-dark py-2 w-100" replace>
                  Editar
                </Link>
              </div>
            </div>

            <h4 className="mb-0">Detalhes</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Ano</dt>
              <dd className="col-sm-8 mb-3">{carro.ano}</dd>

              <dt className="col-sm-4">Marca</dt>
              <dd className="col-sm-8 mb-3">{carro.marca}</dd>

              <dt className="col-sm-4">Modelo</dt>
              <dd className="col-sm-8 mb-3">{carro.modelo}</dd>

              <dt className="col-sm-4">Preço</dt>
              <dd className="col-sm-8 mb-3">{carro.preco}</dd>

              <dt className="col-sm-4">Quilometragem</dt>
              <dd className="col-sm-8 mb-3">{carro.quilometragem}</dd>

              <dt className="col-sm-4">Status</dt>
              <dd className="col-sm-8 mb-3">Em estoque</dd>

              <dt className="col-sm-4">Nota</dt>
              <dd className="col-sm-8 mb-3">
                <Ratings
                  rating={4.5}
                  widgetRatedColors="rgb(253, 204, 13)"
                  changeRating={changeRating}
                  widgetSpacings="2px"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    return (
                      <Ratings.Widget
                        key={i}
                        widgetDimension="20px"
                        svgIconViewBox="0 0 19 20"
                        svgIconPath={iconPath}
                        widgetHoverColor="rgb(253, 204, 13)"
                      />
                    );
                  })}
                </Ratings>
              </dd>
            </dl>

            <h4 className="mb-0">Descrição</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
                Nossos carros são cuidadosamente selecionados e mantidos para garantir a máxima qualidade e confiabilidade.
                Comprometemo-nos com a conservação meticulosa de cada veículo, assegurando que estejam sempre em ótimas condições.
                Todos os carros passam por manutenções regulares, proporcionando desempenho consistente e durabilidade.
                Além disso, oferecemos uma garantia de 2 anos na compra, refletindo nosso compromisso com a satisfação e segurança dos nossos clientes.
                Em cada carro, você encontrará não apenas um veículo, mas uma promessa de excelência e tranquilidade ao dirigir.
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <h4 className="text-muted my-4">Produtos relacionados</h4>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <RelatedProduct key={i} percentOff={i % 2 === 0 ? 15 : null} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
