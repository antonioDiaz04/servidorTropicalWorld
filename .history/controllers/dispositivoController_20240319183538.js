const Dispositivo = require("../models/Dispositivo");
const { param } = require("../routes/dispositivo");

exports.actualizaEstadoLed = async (req, res) => {
  try {
    const { id } = req.params;
    const { led } = req.body;

    // Buscar el dispositivo por su ID
    const dispositivo = await Dispositivo.findById(id);
console.log(dispositivo)
    if (!dispositivo) {
      return res.status(404).json({ mensaje: 'Dispositivo no encontrado' });
    }

    // Actualizar el estado del LED del dispositivo
    dispositivo.led = led;

    // Guardar los cambios actualizados
    await dispositivo.save();

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
