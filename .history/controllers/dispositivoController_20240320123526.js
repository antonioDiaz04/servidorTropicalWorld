const Dispositivo = require("../models/Dispositivo");
const { param } = require("../routes/dispositivo");


exports.actualizaEstadoLed = async (req, res) => {
  try {
    const { led } = req.body;
console.log(led)
    // Verificar si led es un número válido (0 o 1)
    if (typeof led !== 'number' || (led !== 0 && led !== 1)) {
      return res.status(400).json({ mensaje: 'El valor de LED debe ser 0 o 1' });
    }

    // Actualizar el estado del LED en la base de datos
    await Dispositivo.findOneAndUpdate(
      { 'led' :led } // Actualizar el valor del LED con el valor recibido
    );

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
    res.status(200).json({ mensaje: 'Estado del LED actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado del LED:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};

exports.actualizaEstadoValancin = async (req, res) => {
  try {
    const { valancin } = req.body;
console.log(valancin)
    // Verificar si led es un número válido (0 o 1)
    if (typeof valancin !== 'number' || (valancin !== 0 && led !== 1)) {
      return res.status(400).json({ mensaje: 'El valor de LED debe ser 0 o 1' });
    }

    // Actualizar el estado del LED en la base de datos
    await Dispositivo.findOneAndUpdate(
      { 'led' :led } // Actualizar el valor del LED con el valor recibido
    );

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
    res.status(200).json({ mensaje: 'Estado del LED actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar el estado del LED:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
};


// Endpoint para obtener el estad
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


exports.obtenerDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch {
    console.log("error");
  }
}
