



  
  // Ruta agregarPolitica
  const { Politica, Pregunta } = require("../models/Privado"); // Assuming models/Privado.js is in the same directory

//   const Pregunta = require("../models/Pregunta");
  

exports.agregarPolitica = async (req, res) => {
  try{


    const politica = new Politica(req.body);
    const resultado = await politica.save(); // Corrección aquí
    res.status(200).send(resultado);
  

   console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al agregar politica");
  }
};




exports.getPoliticas = async (req, res) => {
    try {
      const politica = await Politica.find();
      res.json(politica);
    } catch {
      console.log("error");
    }
  }


  
exports.agregarPregunta = async (req, res) => {
  try{


    const pregunta = new Pregunta(req.body);
    const resultado = await pregunta.save(); // Corrección aquí
    res.status(200).send(resultado);
  

   console.log(req.body);// esto permite mostrar los resultados del json /    res.status(201).json(resultado);
  
  } catch (error) {
    console.error(error);
    res.status(500).send("Ocurrió un error al agregar politica");
  }
};

// getPoliticas




exports.getPreguntas = async (req, res) => {
    try {
      const pregunta = await Pregunta.find();
      res.json(pregunta);
    } catch {
      console.log("error");
    }
  }






  
exports.actualizarPregunta = async (req, res) => {
  try {
    const { titulo, categoria, ubicacion, precio,descripcion } = req.body;
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

