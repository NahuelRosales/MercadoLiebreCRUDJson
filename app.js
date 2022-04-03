const express = require('express');

const app = express();

const PORT = 3000

let path = require("path")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares

app.use(express.static("public"))

/* Enrutadores */
let mainRouter = require('./routes/mainRouter')


/* RUTAS */
app.use('/', mainRouter)

/* SERVER */

app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}
 http://localhost:${PORT}`
    
));