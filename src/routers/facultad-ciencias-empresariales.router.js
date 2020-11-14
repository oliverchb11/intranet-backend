/*
paht : /api/v1/intranet-unisabaneta/equipo/facultad-ciencias-empresariales
*/

const express = require('express');
const router = express.Router();
const cienciasEmpresarialesController = require('../controllers/facultad-ciencias-empresariales.controller');

router.get('/', cienciasEmpresarialesController.getData);


module.exports = router