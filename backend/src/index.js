const express = require('express');
const cors = require('cors'); 
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json()); // --> Informa para que antes de fazer as requisições, utilizar formato json
app.use(routes);
app.listen(3333);
/*
    Rota vs Recurso
    Rota = Caminho completo do http (http://localhost:8080 ou http://localhost:8080/algo)
    Recurso = 'users' --> caminhohttp/recurso --> http://localhost:8080/users
*/
/*
    Metodos HTTP

    GET: Buscar/Listar informação no backend (API)
    POST: Criar uma informação no backend (API)
    PUT: Alterar uma informação no backend (API)
    DELETE: Deletar uma informação no backend (API)
*/
/*
    Tipos de parâmetros

    Query Params: Parâmetro nomeados enviados na rota após o símbolo de '?' (Filtros, paginação)
    Route Params: Parâmetros utilizados para identicar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/* 
    Comunicação com banco de dados (SQL ou noSQL)
     
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where();

*/



