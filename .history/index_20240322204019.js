const express = require('express');
const conectarDB = require('./config/conexion');
const cors = require('cors');
// creamos el servidor
const app = express();

const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
// conectamos a la base de datos
conectarDB();
const corsOptions = {
    origin: 'http://localhost:4200',  // Reemplaza con la URL de tu aplicación Angular
    credentials: true,
  };
  
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());




app.use('/correo',require('./routes/mensaje'))





app.use(cors())



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // Permitir credenciales
  next();
});

app.use('/comentarios',require('./routes/comentario'))
app.use('/productos', require('./routes/producto'));
app.use('/usuarios',require('./routes/usuario'));
app.use('/dispositivos',require('./routes/dispositivo'));







app.listen(4000, () => {
    console.log("el servidor esta corriendo perfectamente en el puerto 4000 ");
})