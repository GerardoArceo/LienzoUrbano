//REQUIREDS
const express = require('express');
const { executeAction } = require('../mysql/mysql');
const { verificaToken, CORS } = require('../middlewares/acceso');

const app = express();

app.use(CORS);

app.post('/API', verificaToken, async(req, res) => {
    let body = req.body;
    let accion = body.accion;
    let params = body.params;
    // info aportada por el JWT
    let data = { idUser: req.id, access: req.access };
    console.log(data);
    let result = await executeAction(accion, params, data);
    res.json(result);
});

app.get('/API', (req, res) => {
    data = {
        app: 'API de Lienzo Urbano',
        fecha: Date.now(),
        nombre: 'Gerardo Arceo',
        mensaje: 'Sé feliz :)'
    };
    res.json({
        data
    });
});

module.exports = app;