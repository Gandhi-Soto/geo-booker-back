// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Endpoints para las rutas de las categorias             #
//   ---------------------------------------------------------------------------------#-->

import { Router } from 'express';
import { getCategorias, getCategoria, createCategoria, updateCategoria, deleteCategoria } from '../Controllers/Categoria.js';

export const CategoriaRouter = Router();

CategoriaRouter.get("/", getCategorias);
CategoriaRouter.get("/:id", getCategoria);
CategoriaRouter.post("/", createCategoria);
CategoriaRouter.put("/:id", updateCategoria);
CategoriaRouter.delete("/:id", deleteCategoria);