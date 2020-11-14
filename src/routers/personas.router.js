const express = require('express');
const router = express.Router();
const personasController = require('../controllers/personas.controller');

router.get('/', personasController.getData);


module.exports = router