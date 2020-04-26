const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

//habilitando routes para criar rotas
const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);

//exportando a variável routes, para que server.js execute tudo que determinamos que routes deverá fazer
module.exports = routes;
