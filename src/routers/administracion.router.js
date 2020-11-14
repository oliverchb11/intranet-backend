/*
paht : /api/v1/intranet-unisabaneta/equipo/administracion
*/

const express = require('express');
const router = express.Router();
const administracionController = require('../controllers/administracion.controller');

router.get('/', administracionController.getData);


module.exports = router