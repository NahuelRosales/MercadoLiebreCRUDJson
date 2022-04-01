const express = require('express');

const app = express();



/* Enrutadores */
let mainRouter = require('./routes/mainRouter')


/* MIDDLEWARES DE RUTAS */
app.use('/', mainRouter)

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});