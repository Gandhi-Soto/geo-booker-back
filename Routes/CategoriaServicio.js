// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 19/06/2024      #
//   --# Descripcion General : Endpoints para las rutas de categoriaServicio          #
//   ---------------------------------------------------------------------------------#-->

import { Router } from 'express';
import { getCategoriasServicios, getServiciosDeUnaCategoria, getCategoriaServicioId } from '../Controllers/CategoriaServicio.js';

export const CategoriaServicioRouter = Router();

CategoriaServicioRouter.get("/", getCategoriasServicios);
CategoriaServicioRouter.get("/:id", getServiciosDeUnaCategoria);
CategoriaServicioRouter.get("/:id_categoria/:id_servicio", getCategoriaServicioId);