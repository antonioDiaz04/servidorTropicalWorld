const Producto = require("../models/Producto");

const { param } = require("../routes/producto");



// Importa cloudinary




const cloudinary = require("cloudinary").v2;

// Importa multerConfig
const upload = require('../middlewares/multer');




cloudinary.config({ 
  cloud_name: 'dvvhnrvav', 
  api_key: '982632489651298', 
  api_secret: 'TTIZcgIMiC8F4t8cE-t6XkQnPyQ' 
});



exports.crearProducto = async (req, res) => {
  try {
    // Verifica si se está enviando una imagen
    if (!req.file || !req.file.originalname) {
      return res.status(400).send('404 No se ha proporcionado una imagen.');
    }

    // Sube la imagen a Cloudinary
    const resultadoCloudinary = await cloudinary.uploader.upload(req.file.path, { folder: 'Productos' });

    // Crea un nuevo objeto de Producto con los datos del cuerpo de la solicitud y la URL de la imagen en Cloudinary
    const producto = new Producto({
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      imagen: resultadoCloudinary.url // Guarda la URL de la imagen en el modelo de Producto
    });

    // Guarda el producto en la base de datos
    await producto.save();

    // Envía una respuesta con el producto creado
    res.status(201).json({ message: 'Producto creado exitosamente', producto });
  


    // Guarda el producto en la base de datos
    const resultadoProducto = await producto.save();

    // Envía la respuesta con el producto creado
    res.status(201).json(resultadoProducto);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    res.status(500).json({ error: 'Ocurrió un error al crear el producto.' });
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


        
exports.obtenerDetalleProductoById = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Ocurrió un error");
  }
};




exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch {
    console.log("error");
  }
}

exports.actualizarProducto = async (req, res) => {
  try {
    const { nombre, categoria, ubicacion, precio,descripcion } = req.body;
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: 'No existe el producto' });
    }
    producto.nombre = nombre;
    producto.categoria = categoria;
    producto.ubicacion = ubicacion;
    producto.precio = precio;
    producto.descripcion=descripcion;

    producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
    res.json(producto);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}

exports.obtenerProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).json({ msg: 'No existe el producto' });
    }
    producto = await Producto.findOneAndUpdate({ _id: req.params.id }, producto, { new: true });
    res.json(producto);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}

exports.eliminarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);

    if (!producto) {
      res.status(404).json({ msg: 'No existe el producto' });
    }
    
    await Producto.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: 'Producto eliminado con exito' });
    
  } catch (error) {
    console.log(error);
    res.status(500).send('ocurrio un error');
  }
}

