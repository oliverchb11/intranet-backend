/*
paht : /api/v1/intranet-unisabaneta/equipo/facultad-derecho
*/

const express = require('express');
const router = express.Router();
const derechoController = require('../controllers/facultad-derecho.controller');

router.get('/', derechoController.getData);


module.exports = router