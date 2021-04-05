const routes = require('./routes');
const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/*
Rotas e Recursos 


Metodos HTTP:

GET: Busca informação no backend

POST: Criar uma informação no backand

PUT: Alterando informação no backend

DELETE: Deletando informação no backend


*/


/**
 * Tipos de parametros
 * 
 * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * ROute Parms: Parâmetros utilizados para identificar recusos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CounchDB, etc
 */

 /**
  * Driver SELET * FROM users
* Query Builder: table('users').select('*')
  */

app.listen(3333);