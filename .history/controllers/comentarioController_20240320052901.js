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

exports.crearComentarioInvitado=async(req,res)=>
{

try {
  
} catch (error) {
  
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

