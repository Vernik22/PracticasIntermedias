import express from "express";
import morgan from "morgan";


//Routes de Practica1
import ejemploRoutes from "./routes/practicas.routes"

const app = express();


//Settings
app.set("port", 4000);

//Middelware
app.use(morgan("dev"));

//Rutas
app.use("/api/Ejemplo",ejemploRoutes);

export default app;