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
            const simbolos = '#'.repeat(contador);
            process.stdout.write(`Conectando ${simbolos}\r`);
        }, 1000);
    
        // Usa mongoose.connect para
        //  establecer la conexión. La URL de conexión se toma de la variable de entorno DB_MONGO.
        await mongoose.connect(process.env.DB_MONGO, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        })
        clearInterval(intervalo); // Detiene el contador
        console.log(process.env.DB_MONGO)
        console.log("\nConexión establecida");


    } catch (error) {
        clearInterval(intervalo); // Detiene el contador en caso de error
        console.log("\nConexión fallida");
    }
}

module.exports = conectarDB;
// Exporta la función conectarDB 
// para que pueda ser utilizada en otros archivos de la aplicación.
