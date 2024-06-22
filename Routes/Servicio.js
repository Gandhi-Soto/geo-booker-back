// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Endpoints para las rutas de servicios                  #
//   ---------------------------------------------------------------------------------#-->

import { Router } from 'express';
import { getServicios, getServicio, createServicio, updateServicio, deleteServicio } from '../Controllers/Servicio.js';

export const ServicioRouter = Router();

ServicioRouter.get("/", getServicios);
ServicioRouter.get("/:id", getServicio);
ServicioRouter.post("/", createServicio);
ServicioRouter.put("/:id", updateServicio);
ServicioRouter.delete("/:id", deleteServicio);