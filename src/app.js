import express from "express";
import morgan from "morgan";
import contribuyenteroutes from "./routes/contribuyente.routes";
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(
    "<h1>Bienvenidos al Backend de la Municipalidad</h1><p>Desarrollado por Alumonos de la UpeU</p>"
  );
});
app.use("/api/auth/contribuyente", contribuyenteroutes);

export default app;
