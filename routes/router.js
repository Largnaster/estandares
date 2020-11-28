import express from "express";
const router = express.Router();

// Se necesita importar el modelo de la base de datos
import Registro from "../models/registro";

// Ruta para agregar un nuevo alumno
router.post("/nuevo", async (req, res) => {
  // Solicitar la informacion
  const body = req.body;
  try {
    // Almacenar la informacion del body
    const registroDB = await Registro.create(body);
    // Generar un json con la informacion para enviar
    res.status(200).json(registroDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(500).json({
      mensaje: "Ocurrio un error al adicionar",
      error,
    });
  }
});

// Ruta GET para obtener la informacion de la base de datos
router.get("/registro", async (req, res) => {
  // Obtener la informacion en la base de datos
  try {
    const registroDB = await Registro.find();
    res.json(registroDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error al obtener",
      error,
    });
  }
});

// Obtener una sola coleccion de alumno
router.get("/registro/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    // Obtener un alumno por el id de mongo
    const registroDB = await Registro.findOne({ _id });
    res.json(registroDB);
  } catch (error) {
    // enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error al obtener",
      error,
    });
  }
});

// Ruta para eliminar una nota
router.delete("/registro/:id", async (req, res) => {
  // Obtener los parametros del id
  const _id = req.params.id;
  try {
    const registroDB = await Registro.findByIdAndDelete({ _id });
    if (!registroDB) {
      // Enviar mensaje de error si no existe la coleccion
      return res.status(400).json({
        mensaje: "Ocurrio un error al encontrar",
        error,
      });
    }
    res.json(registroDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error al borrar",
      error,
    });
  }
});

// Ruta para actualizar un alumno
router.put("/registro/:id", async (req, res) => {
  // Obtener el id en la ruta
  const _id = req.params.id;
  const body = req.body;
  try {
    const registroDB = await Registro.findByIdAndUpdate(_id, body, { new: true });
    res.json(registroDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error al insertar",
      error,
    });
  }
});

// Exportar el router
module.exports = router;