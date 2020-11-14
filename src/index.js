const express = require('express');
const app = express();
require('dotenv').config()
const morgan = require('morgan');
const cors = require('cors')
const routerPersonas = require('./routers/personas.router')
const routerAdministracion = require('./routers/administracion.router')
const routerIngenieria = require('./routers/facultad-ingenieria.router')
const routerDerecho = require('./routers/facultad-derecho.reouter')
const routerCienciasEmpresariales = require('./routers/facultad-ciencias-empresariales.router')

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors({ origin: "http://localhost:4200" }));

//routers
app.use("/api/v1/intranet-unisabaneta/equipo/administracion", routerAdministracion)
app.use("/api/v1/intranet-unisabaneta/equipo/facultad-ingenieria", routerIngenieria)
app.use("/api/v1/intranet-unisabaneta/equipo/facultad-derecho", routerDerecho)
app.use("/api/v1/intranet-unisabaneta/equipo/facultad-ciencias-empresariales", routerCienciasEmpresariales)
app.use("/api/v1/intranet-unisabaneta/equipo/personas", routerPersonas)


//server
const port = app.get('port');

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})