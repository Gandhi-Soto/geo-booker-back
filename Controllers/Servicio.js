// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Controladores para los servicios                       #
//   ---------------------------------------------------------------------------------#-->

import Servicio from "../Models/Servicio.js";

//GET
export const getServicios = async (req, res) => {
    try {
        const servicios = await Servicio.findAll();
        res.json(servicios);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//GET BY ID
export const getServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findAll({
            where: {
                id_servicio: req.params.id
            }
        })

        res.json(servicio);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//POST
export const createServicio = async (req, res) => {
    try {
        await Servicio.create(req.body);
        res.json({
            message: "Servicio creado: " + req.body.servicio_nombre
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//PUT
export const updateServicio = async (req, res) => {
    try {
        await Servicio.update(req.body, {
            where: {
                id_servicio: req.params.id
            }
        })

        res.json({
            message: "Servicio actualizado: " + req.body.servicio_nombre
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

//DELETE
export const deleteServicio = async (req, res) => {
    try {
        await Servicio.destroy({
            where: {
                id_servicio: req.params.id
            }
        })

        res.json({
            message: "Servicio eliminado: " + req.params.id
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}