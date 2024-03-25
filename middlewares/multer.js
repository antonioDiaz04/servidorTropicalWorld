const multer = require("multer");
const path = require('path');


const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

module.exports = upload;

















// exports.multerConfig = multer({
//     // Para decirle a Multer dónde guardaremos el archivo, en este caso lo dejo vacío porque el archivo
//     // será subido a Cloudinary
//     storage: multer.diskStorage({}),
//     // Función para controlar qué archivos son aceptados
//     fileFilter: (req, file, cb) => {
//         // originalname es el nombre del archivo en la computadora del usuario
//         let ext = path.extname(file.originalname);

//         // La función debe llamar a “cb” usando una variable del tipo boolean
//         // para indicar si el archivo debería ser aceptado o no
//         if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
//             // Para rechazar el archivo es necesario pasar “false”, de la siguiente forma:
//             cb(
//                 new Error(
//                     "El formato de archivo para la imagen no está soportado. Debe subir una imagen con extensión jpg, jpeg o png"
//                 ),
//                 false
//             );
//             return;
//         }

//         // Para aceptar el archivo es necesario pasar “true”, de la siguiente forma:
//         cb(null, true);
//     }
// });
