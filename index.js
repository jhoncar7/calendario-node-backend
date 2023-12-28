import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { dbConnection } from './database/config';
import { authRouter, EventsRouter } from './routes'

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);
app.use('/api/events', EventsRouter);


// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});






