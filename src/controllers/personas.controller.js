const personasController = {}
const { request, response } = require('express');
const db = require('../../database/conexion')

personasController.getData = (req = request, res = response) => {
    try {
        db.query("SELECT * FROM personas3", function(error, result) {
            if (error) {
                console.log(error);
                return res.status(400).json({
                    ok: false,
                    msg: 'Error de query'
                })
            }

            res.status(200).json({
                ok: true,
                result
            })
        })
    } catch (error) {
        console.log('Error de servidor');
        res.status(500).json({
            ok: false,
            msg: 'Error de servidor'
        })
    }
}


module.exports = personasController