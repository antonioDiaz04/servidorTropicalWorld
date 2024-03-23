const mongoose = require('mongoose');
// Importa la biblioteca mongoose
//  que se utiliza para interactuar con bases de datos MongoDB desde Node.js.
//ruta del archivo de variable.env
require("dotenv").config({ path: "variables.env" });



const conectarDB = async () => {
    try {
        let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    process.stdout.write(`Conectando (${contador}s)\r`);
}, 1000);
        // Usa mongoose.connect para
        //  establecer la conexión. La URL de conexión se toma de la variable de entorno DB_MONGO.
        await mongoose.connect(process.env.DB_MONGO, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        console.log(process.env.DB_MONGO)
        console.log("conexion establecida");
    } catch (error) {
        console.log("conexion fallida");
    }
}

module.exports = conectarDB;
// Exporta la función conectarDB 
// para que pueda ser utilizada en otros archivos de la aplicación.
