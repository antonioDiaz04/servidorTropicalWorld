const Dispositivo = require("../models/Dispositivo");
const { param } = require("../routes/dispositivo");


exports.actualizaEstadoLed = async (req, res) => {
  try{

    const dispositivo = new    Dispositivo(req.body);
    const resultado = await dispositivo.save(); // Corrección aquí
    res.status(200).send(resultado);

   console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error");
  }
};/ Endpoint para obtener el estad
exports.estadoled = async (req, res) => {
    try {
        // Consultar el estado actual del LED en la base de datos
        const dispositivo = await Dispositivo.findOne().sort({ fechaCreacion: -1 });

        // Devolver solo el estado del LED como respuesta
        res.send(dispositivo.led.toString());
    } catch (error) {
        console.error('Error al obtener el estado del LED:', error);
        res.status(500).send('Error al obtener el estado del LED');
    }
};



/
exports.obtenerDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch {
    console.log("error");
  }
}
