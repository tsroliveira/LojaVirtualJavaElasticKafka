# Loja Virtual

## Requisitos
- Java >= 17.x.x
- Maven
- Node.js
- npm

## Tecnologias
- Frontend com React para a interface do usuário.
- Backend em Java utilizando Spring Boot para criar a API.
- Banco de Dados MySQL.
- Docker para o serviço do ElasticSearch

## Instalação

1. Clone o repositório LojaVirtualJavaElasticKafka.
   ```sh
   git clone https://github.com/tsroliveira/LojaVirtualJavaElasticKafka.git
   ```
2. Rode os scripts de configuração do banco de dados MySQL.
   ```sh
   dumpDB_produtos.20250226.sql
   ```
3. Navegue até o Docker do ElasticSearch e execute o serviço.
   ```sh
      cd \LojaVirtualJavaElasticKafka\elasticsearch\
      docker-compose up -d
   ```
4. Configure a conexão com o banco no arquivo application.properties.
   ```sh
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=carros
   DB_USERNAME=root
   DB_PASSWORD=root
   ```
5. Navegue a pasta \LojaVirtualJavaElasticKafka\java instale as dependencias e execute a aplicação principal.
   ```sh
      mvn clean install
      mvn spring-boot:run
   ```
6. Configure a collection no Postman ou outra ferramenta de seu uso e faça os testes de cada endpoint.
   ```sh
      VirtualStoreJava.Postman_Collection.json
   ```
7. Abra uma nova janela de terminal e navege até a pasta do FrontEnd em React.
   ```sh
   cd .\LojaVirtualJavaElasticKafka\web\
   ```
7. Instale as dependencias do projeto FrontEnd.
   ```sh
   npm install
   ```
8. Execute o frontend do projeto.
   ```sh
   npm start
   ```

---
## Home Sample
![Imagem de um carro](https://github.com/tsroliveira/AppLojaCarros/raw/main/web/src/img/sample/img_1.png)

## Search Page Sample
![Imagem de um carro](https://github.com/tsroliveira/AppLojaCarros/raw/main/web/src/img/sample/img_2.png)

## View Page Sample
![Imagem de um carro](https://github.com/tsroliveira/AppLojaCarros/raw/main/web/src/img/sample/img_3.png)

