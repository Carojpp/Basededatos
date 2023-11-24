import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import accountsRoutes from './routes/accountsRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://edwinarroyolopez:7jUu25HQb59VdnW3@release.tbmun.mongodb.net/staging';

// Configuración de middleware
app.use(bodyParser.json());

// Configuración de rutas
app.use('/api', accountsRoutes);

// Conexión a la base de datos
mongoose.connect(MONGODB_URI, { 
    //useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
 });

// Manejo de errores de conexión a la base de datos
mongoose.connection.on('error', (err) => {
  console.error('Error de conexión a la base de datos:', err);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
