



  
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

// getPoliticas




exports.getPoliticas = async (req, res) => {
    try {
      const politica = await Politica.find();
      res.json(politica);
    } catch {
      console.log("error");
    }
  }