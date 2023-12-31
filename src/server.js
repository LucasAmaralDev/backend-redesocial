require('./database');
require('dotenv').config();
var cors = require('cors')


const express = require('express');
const { routes } = require('./routes');

const server = express();

server.use(cors())
server.use(express.json());
server.use(routes);


server.listen(8080, () => {
    console.log('🚀 Server started!');
});
