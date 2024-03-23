const Comentario = require("../models/Comentario");
const { param } = require("../routes/producto");


exports.obtenerComentarios = async (req, res) => {
  try {
    const comentario = await comentarios.find();
    res.json(comentario);
  } catch {
    console.log("error");
  }
}

exports.crearComentarioInvitado = async (req, res) => {
  try {
    const { nombre, correo, comentario } = req.body; // Obtener los datos del cuerpo de la solicitud

    // Crear una nueva instancia de Comentario con los datos proporcionados
    const nuevoComentario = new Comentario({ nombre, correo, comentario });

    // Guardar el nuevo comentario en la base de datos
    const resultado = await nuevoComentario.save();

    // Enviar una respuesta al cliente con el resultado
    res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al guardar el comentario");
  }
};


// exports.crearProducto = async (req, res) => {
//   try{

//     // const producto2 = new Producto({
//     //   ...req.body,
//     //   photo: photo._id, // Asignar el ID de la foto al producto si hay una relación
//     // });

//     const producto = new Producto(req.body);
//     const resultado = await producto.save(); // Corrección aquí
//     res.status(200).send(resultado);
  

//    console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Ocurrió un error");
//   }
// };





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

