# Sistema de estoque de alimentos API

## Estrutura do Projeto

O projeto está organizado em camadas para facilitar a manutenção e a escalabilidade:

- **controllers/**: Contém os controladores que lidam com as requisições HTTP.
- **models/**: Define os esquemas de dados e interage diretamente com o MongoDB usando Mongoose.
- **routes/**: Define as rotas da API e as associa aos controladores correspondentes.
- **services/**: Contém a lógica de negócio e interage com os modelos para manipulação de dados.
- **app.js**: Arquivo principal da aplicação onde o Express é configurado, as rotas são integradas e a conexão com o MongoDB é estabelecida.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js.

## Funcionalidades da API

A API gerencia as informações sobre alimentos em um sistema de estoque.

### Pré-requisitos

- Node.js instalado.
- MongoDB instalado ou uma conta no MongoDB Atlas.

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/guilhermehub12/food-stock.git
   cd food-stock
    ```

2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure a conexão com o MongoDB alterando o arquivo de váriaveis de ambiente no arquivo `.env`:
  ```js
    MONGODB_USER=""
    MONGODB_PASSWORD=""
    MONGODB_CLUSTER=""
    MONGODB_APPNAME=""
  ```

