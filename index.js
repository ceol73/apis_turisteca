const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index'); // Importa las rutas definidas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/api', routes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});