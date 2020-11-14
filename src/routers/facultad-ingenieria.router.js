/*
paht : /api/v1/intranet-unisabaneta/equipo/facultad-ingenieria
*/

const express = require('express');
const router = express.Router();
const ingenieriaController = require('../controllers/facultad-ingenieria.controller');

router.get('/', ingenieriaController.getData);


module.exports = router