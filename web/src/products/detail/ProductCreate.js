import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ScrollToTopOnMount from '../../template/ScrollToTopOnMount';
import { formatCurrency, validateYear, formatMileage, unformatMileage, unformatCurrency, validatePrice } from '../../utils/functions';

const ProductCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carro, setCarro] = useState({
    marca: '',
    modelo: '',
    ano: '',
    preco: '',
    quilometragem: '',
    imagem: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [error, setError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (id) {
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
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'preco') {
      formattedValue = formatCurrency(value);
    } else if (name === 'quilometragem') {
      formattedValue = formatMileage(value);
    }

    setCarro(prevState => ({
      ...prevState,
      [name]: formattedValue,
    }));
  };

  const handleImageUpload = () => {
    if (!selectedFile) {
      return Promise.resolve(null);
    }

    const formData = new FormData();
    formData.append('imagem', selectedFile);

    return axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => response.data.filename)
    .catch(error => {
      console.error('Erro ao carregar imagem:', error);
      return null;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { preco, ano, marca, modelo } = carro;
    const quilometragemInt = unformatMileage(carro.quilometragem);

    if (!validateYear(ano)) {
      setError('Ano inválido. Deve conter apenas números e ter até 4 dígitos.');
      return;
    }

    if (!validatePrice(preco)) {
      setError('Preço inválido. Formato correto: 1.000,00.');
      return;
    }

    setError('');

    //const filename = await handleImageUpload();
    //const carData = {
    //  preco: unformatCurrency(preco),
    //  ano,
    //  quilometragem: parseInt(quilometragemInt),
    //  marca,
    //  modelo,
    //  imagem: filename || carro.imagem,
    //};
    const formData = new FormData();
    formData.append('marca', marca);
    formData.append('modelo', modelo);
    formData.append('ano', ano);
    formData.append('preco', unformatCurrency(preco));
    formData.append('quilometragem', quilometragemInt);
    
    if (selectedFile) {
      formData.append('imagem', selectedFile);
    }
  

    //axios
    //  .post(`${process.env.REACT_APP_API_URL}/carros`, carData)
    //  .then(response => {
    //    console.log(response.data);
    //    setUpdateSuccess(true);
    //    navigate(`/productsUpdate/${response.data.id}`);
    //  })
    //  .catch(error => console.error('Houve um erro ao cadastrar o carro!', error));
    axios
    .post(`${process.env.REACT_APP_API_URL}/carros`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log(response.data);
      setUpdateSuccess(true);
      navigate(`/productsUpdate/${response.data.id}`);
    })
    .catch(error => console.error('Houve um erro ao cadastrar o carro!', error));
  };

  //const handleBack = () => {
  //  navigate('/');
  //};

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              {/*{carro.marca} {carro.modelo}*/}
            </li>
          </ol>
        </nav>
        {updateSuccess && (
          <div className="alert alert-success" role="alert">
            Carro cadastrado com sucesso!
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <div className="row mb-4">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <div className="d-flex flex-column h-100">
              <h2 className="mb-1">{/*{carro.marca} {carro.modelo}*/}</h2>
              <h4 className="text-muted mb-4 text-center">Formulário de Cadastro Veículo</h4>

              <h4 className="mb-0">Detalhes</h4>
              <hr />
              <dl className="row">
                <dt className="col-sm-4">Ano</dt>
                <dd className="col-sm-8 mb-3">
                  <input
                    type="text"
                    name="ano"
                    value={carro.ano}
                    onChange={handleChange}
                    required
                  />
                </dd>

                <dt className="col-sm-4">Marca</dt>
                <dd className="col-sm-8 mb-3">
                  <input
                    type="text"
                    name="marca"
                    value={carro.marca}
                    onChange={handleChange}
                    required
                  />
                </dd>

                <dt className="col-sm-4">Modelo</dt>
                <dd className="col-sm-8 mb-3">
                  <input
                    type="text"
                    name="modelo"
                    value={carro.modelo}
                    onChange={handleChange}
                    required
                  />
                </dd>

                <dt className="col-sm-4">Preço</dt>
                <dd className="col-sm-8 mb-3">
                  <input
                    type="text"
                    name="preco"
                    value={carro.preco}
                    onChange={handleChange}
                    required
                  />
                </dd>

                <dt className="col-sm-4">Quilometragem</dt>
                <dd className="col-sm-8 mb-3">
                  <input
                    type="text"
                    name="quilometragem"
                    value={carro.quilometragem}
                    onChange={handleChange}
                    required
                  />
                </dd>

                <dt className="col-sm-4">Imagem</dt>
                <dd className="col-sm-8 mb-3">
                  <input
                    type="file"
                    name="imagem"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </dd>
              </dl>

              <hr />
              
              <div className="row g-3 mb-4">
                <div className="col">
                  <Link to={`/products`} className="btn btn-outline-dark py-2 w-100">
                    Voltar
                  </Link>
                </div>
                <div className="col">
                  <button className="btn btn-dark w-100" type="submit">
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </form>
  );
};

export default ProductCreate;
