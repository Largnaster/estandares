("use strict");
import morgan from 'morgan'
import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
import path from "path";

const app = express();

const uri = process.env.MONGO_URL || "mongodb://localhost:27017/test"

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}
mongoose.connect(uri, options).then(() => {
  console.log("Conectado a la base de datos en "+uri);
},(err) => {
  err;
});

app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", require("./routes/router.js"));

const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3300);

app.listen(app.get("puerto"), () => {
  console.log("Aplicacion escuchando en el puerto " + app.get("puerto"));
});