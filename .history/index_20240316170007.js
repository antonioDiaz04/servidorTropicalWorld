const express = require('express');
const conectarDB = require('./config/conexion');
const cors = require('cors');
// creamos el servidor
const app = express();
const cookieParser=require('cookie-parser');
// conectamos a la base de datos
conectarDB();
const corsOptions = {
    origin: 'http://localhost:4200',  // Reemplaza con la URL de tu aplicación Angular
    credentials: true,
  };
  
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use('/comentarios',require('./routes/comentario'))
app.use('/productos', require('./routes/producto'));
app.use('/usuarios',require('./routes/usuario'));
app.use('/dispositivos',require('./routes/dispositivos'));

app.listen(4000, () => {
    console.log("el servidor esta corriendo perfectamente en el puerto 4000 ");
})
