



  
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
    const { titulo, contenido } = req.body;
    let pregunta = await Producto.findById(req.params.id);
    if (!pregunta) {
      res.status(404).json({ msg: 'No existe la pregunta' });
    }
    pregunta.titulo = titulo;
    pregunta.contenido = contenido;
    // 

    pregunta = await Producto.findOneAndUpdate({ _id: req.params.id }, pregunta, { new: true });
    res.json(pregunta);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}

exports.obtenerPregunta = async (req, res) => {
  try {
    let pregunta = await Producto.findById(req.params.id);
    if (!pregunta) {
      res.status(404).json({ msg: 'No existe la pregunta' });
    }
    pregunta = await Producto.findOneAndUpdate({ _id: req.params.id }, pregunta, { new: true });
    res.json(pregunta);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}

exports.eliminarPregunta = async (req, res) => {
  try {
    let pregunta = await Producto.findById(req.params.id);

    if (!pregunta) {
      res.status(404).json({ msg: 'No existe la pregunta' });
    }
    
    await pregunta.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: 'pregunta eliminado con exito' });
    
  } catch (error) {
    console.log(error);
    res.status(500).send('ocurrio un error');
  }
}




// politica


  
exports.actualizarPolitica = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    let politica = await Producto.findById(req.params.id);
    if (!politca) {
      res.status(404).json({ msg: 'No existe la pregunta' });
    }
    politca.titulo = titulo;
    politica.contenido = contenido;
    // 

    politica = await Politca.findOneAndUpdate({ _id: req.params.id }, politica, { new: true });
    res.json(politica);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}

exports.obtenerPolitica = async (req, res) => {
  try {
    let politica = await Producto.findById(req.params.id);
    if (!pregunta) {
      res.status(404).json({ msg: 'No existe la pregunta' });
    }
    pregunta = await Producto.findOneAndUpdate({ _id: req.params.id }, pregunta, { new: true });
    res.json(pregunta);
  } catch (error) {
    res.status(500).send('hubo un error');
  }
}

exports.eliminarPregunta = async (req, res) => {
  try {
    let pregunta = await Producto.findById(req.params.id);

    if (!pregunta) {
      res.status(404).json({ msg: 'No existe la pregunta' });
    }
    
    await pregunta.findOneAndDelete({ _id: req.params.id });
    res.json({ msg: 'pregunta eliminado con exito' });
    
  } catch (error) {
    console.log(error);
    res.status(500).send('ocurrio un error');
  }
}

