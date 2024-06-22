// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Inicialización del back usando express                 #
//   ---------------------------------------------------------------------------------#-->

import express from "express";
import db from "./DbConnection.js";
import { ClienteRouter } from "./Routes/Cliente.js";
import { corsMiddleware } from "./Middlewares/Cors.js";
import { CategoriaRouter } from "./Routes/Categoria.js";
import { ServicioRouter } from "./Routes/Servicio.js";
import { CategoriaServicioRouter } from "./Routes/CategoriaServicio.js";

const app = express();

try {
    await db.authenticate();
    console.log("Conexión a la base de datos exitosa");
} catch (error) {
    console.log("Error al conectar a la base de datos: ", error);
}

app.listen(5000, () => {
    console.log("Servidor corriendo en puerto 5000")
});

app.get("/", (req, res) => {
    try {
        res.json({
            message: "Bienvenido al back de GeoBooker"
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});

app.use(express.json());
app.use(corsMiddleware());
app.use("/clientes", ClienteRouter);
app.use("/categorias", CategoriaRouter);
app.use("/servicios", ServicioRouter);
app.use("/categorias-servicios", CategoriaServicioRouter);