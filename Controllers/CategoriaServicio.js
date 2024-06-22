// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 19/06/2024      #
//   --# Descripcion General : Controladores para la ruta de CategoriaServicio        #
//   ---------------------------------------------------------------------------------#-->

import CategoriaServicio from "../Models/CategoriaServicio.js";

//GET
export const getCategoriasServicios = async (req, res) => {
    try {
        const categoriasServicios = await CategoriaServicio.findAll();
        res.json(categoriasServicios);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//GET BY ID
export const getServiciosDeUnaCategoria = async (req, res) => {
    try {
        const categoriaServicio = await CategoriaServicio.findAll({
            where: {
                fk_id_categoria: req.params.id
            }
        })

        res.json(categoriaServicio);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//GET BY FK_ID_CATEGORIA Y FK_ID_SERVICIO
export const getCategoriaServicioId = async (req, res) => {
    try {
        const categoriaServicio = await CategoriaServicio.findAll({
            where: {
                fk_id_categoria: req.params.id_categoria,
                fk_id_servicio: req.params.id_servicio
            }
        })

        res.json(categoriaServicio);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}