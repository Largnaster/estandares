import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Esquemas para la base de datos
const esqRegistro = new Schema({
  id: { type: String, required: [true, "El Id es requerido"] },
  nombre: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  tipo: {type: String, required: [true, "Tipo es requerido"]},
  req_que_utiliza: String,
  critico: String,
  prioridad: {type: Number, required: [true, "Prioridad es requerida"]},
  documentos: String,
  entrada: String,
  salida: String,
  descripcion: String,
  situaciones: String
});

// Convertir el esquema mongoose en un modelo MongoDB
const Registro = mongoose.model("Registro", esqRegistro);

// Exportar los esquemas
export default Registro;