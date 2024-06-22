// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Controladores para las categorias                      #
//   ---------------------------------------------------------------------------------#-->

import Categoria from "../Models/Categoria.js";

//GET
export const getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//GET BY ID
export const getCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findAll({
            where: {
                id_categoria: req.params.id
            }
        })

        res.json(categoria);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//POST
export const createCategoria = async (req, res) => {
    try {
        await Categoria.create(req.body);
        res.json({
            message: "Categoria creada: " + req.body.nombre_categoria
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//PUT
export const updateCategoria = async (req, res) => {
    try {
        await Categoria.update(req.body, {
            where: {
                id_categoria: req.params.id
            }
        })

        res.json({
            message: "Categoria actualizada: " + req.body.nombre_categoria
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//DELETE
export const deleteCategoria = async (req, res) => {
    try {
        await Categoria.destroy({
            where: {
                id_categoria: req.params.id
            }
        })

        res.json({
            message: "Categoria eliminada: " + req.params.id
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}