// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Endpoints para las rutas del cliente                   #
//   ---------------------------------------------------------------------------------#-->

import { Router } from 'express';
import { getClientes, getClienteById, createCliente, updateCliente, deleteCliente, getClienteByEmail, getClienteByTel } from '../Controllers/Cliente.js';

export const ClienteRouter = Router();

//GET
ClienteRouter.get("/", getClientes);
ClienteRouter.get("/:id", getClienteById);
ClienteRouter.get("/buscar/email", getClienteByEmail);
ClienteRouter.get("/buscar/tel", getClienteByTel);

//POST
ClienteRouter.post("/", createCliente);

//PUT
ClienteRouter.put("/:id", updateCliente);

//DELETE
ClienteRouter.delete("/:id", deleteCliente);