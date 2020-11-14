("use strict");
import express from 'express'
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3300);

app.listen(app.get("puerto"), () => {
  console.log("Aplicacion escuchando en el puerto " + app.get("puerto"));
});