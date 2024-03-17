const Dispositivo = require("../models/Dispositivo");
const { param } = require("../routes/dispositivo");

exports.guardaDatos = async (req, res) => {
  try{

    // const producto2 = new Producto({
    //   ...req.body,
    //   photo: photo._id, // Asignar el ID de la foto al producto si hay una relación
    // });

    const dispositivo = new    Dispositivo(req.body);
    const resultado = await dispositivo.save(); // Corrección aquí
    res.status(200).send(resultado);
  

   console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error");
  }
};





// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
// mongoose.connect('mongodb://localhost:27017/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
// db.once('open', () => {
//     console.log('Conexión exitosa a la base de datos');
// });

// Definir el esquema del modelo Dispositivo
// const dispositivoSchema = new mongoose.Schema({
//     leds: {
//         type: Number,
//         required: true
//     }
// });

// const Dispositivo = mongoose.model('Dispositivo', dispositivoSchema);

// app.use(bodyParser.json());

// Endpoint para obtener el estadexports.estadoled = async (req, res) => {
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


        
// exports.obtenerDetalleProductoById = async (req, res) => {
//   try {
//     const producto = await Producto.findById(req.params.id);
//     if (!producto) {
//       return res.status(404).json({ msg: "Producto no encontrado" });
//     }
//     res.json(producto);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Ocurrió un error");
//   }
// };




exports.obtenerDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch {
    console.log("error");
  }
}

// exports.actualizarProducto = async (req, res) => {
//   try {
//     const { nombre, categoria, ubicacion, precio } = req.body;
//     let producto = await Producto.findById(req.params.id);
//     if (!producto) {
//       res.status(404).json({ msg: 'No existe el producto' });
//     }
//     producto.nombre = nombre;
//     producto.categoria = categoria;
//     producto.ubicacion = ubicacion;
//     producto.precio = precio;

//     producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
//     res.json(producto);
//   } catch (error) {
//     res.status(500).send('hubo un error');
//   }
// }

// exports.obtenerProducto = async (req, res) => {
//   try {
//     let producto = await Producto.findById(req.params.id);
//     if (!producto) {
//       res.status(404).json({ msg: 'No existe el producto' });
//     }
//     producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
//     res.json(producto);
//   } catch (error) {
//     res.status(500).send('hubo un error');
//   }
// }

// exports.eliminarProducto = async (req, res) => {
//   try {
//     let producto = await Producto.findById(req.params.id);

//     if (!producto) {
//       res.status(404).json({ msg: 'No existe el producto' });
//     }
    
//     await Producto.findOneAndDelete({ _id: req.params.id });
//     res.json({ msg: 'Producto eliminado con exito' });
    
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('ocurrio un error');
//   }
// }

