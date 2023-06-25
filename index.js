const express = require('express');
const conectarDB = require('./Config/db')
const config = require('./Config/global');
const cors = require('cors');

const app = express();

//Conectar BD
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/peliculas', require('./routes/pelicula'));
app.use('/api/socios', require('./routes/socio'));
app.use('/api/prestamos', require('./routes/prestamo'));
app.use('/api/copias', require('./routes/copia'));
app.use('/api/pdf', require('./routes/pdf'));
app.use('/api/usuario', require('./routes/usuario'));



app.listen(config.port, () => {
    console.log('El servidor por el puerto 4000')
})