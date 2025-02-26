import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductsList = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/carros`)
            .then(response => {
                setCarros(response.data);
            });
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {carros.map(carro => {
                let imgSrc;
                try {
                    imgSrc = require(`../img/cars/${carro.imagem}`);
                } catch (error) {
                    imgSrc = require('../img/cars/default.png');
                }

                const precoLocacao = carro.preco > 100000 
                ? (carro.preco * 0.005).toFixed(2) 
                : (carro.preco * 0.002).toFixed(2);

                return (
                    <div key={carro.id} className="col">
                        <div className="card shadow-sm">
                            <img
                                className="card-img-top bg-dark cover"
                                height="100%"
                                alt={`${carro.marca} ${carro.modelo}`}
                                src={imgSrc}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {carro.marca} {carro.modelo} 
                                    {/* {carro.ano} {carro.quilometragem} */}
                                </h5>
                                <p className="card-text text-center text-muted">R${precoLocacao}</p>
                                <div className="d-grid gap-2">
                                    <Link to={`/products/${carro.id}`} className="btn btn-outline-dark" replace>
                                        Visualizar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductsList;
