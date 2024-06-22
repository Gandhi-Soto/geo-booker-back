// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Controladores para mmanejar los datos del cliente      #
//   ---------------------------------------------------------------------------------#-->

import Cliente from "../Models/Cliente.js";

// MÉTODOS GET
export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findAll({
            where: {
                id_cliente: req.params.id
            }
        })

        res.json(cliente);
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

export const getClienteByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        const cliente = await Cliente.findOne({
            where: { email }
        });

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getClienteByTel = async (req, res) => {
    try {
        const telefono = req.query.tel;
        const cliente = await Cliente.findOne({
            where: { telefono }
        });

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// MÉTODOS POST
export const createCliente = async (req, res) => {
    try {
        await Cliente.create(req.body);
        res.json({
            message: "Cliente creado: " + req.body.nombre + " " + req.body.apellido_paterno + " " + req.body.apellido_materno
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

// MÉTODOS PUT
export const updateCliente = async (req, res) => {
    try {
        await Cliente.update(req.body, {
            where: {
                id_cliente: req.params.id
            }
        })

        res.json({
            message: "Cliente actualizado: " + req.body.nombre + " " + req.body.apellido_paterno + " " + req.body.apellido_materno
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

// MÉTODOS DELETE
export const deleteCliente = async (req, res) => {
    try {
        await Cliente.destroy({
            where: {
                id_cliente: req.params.id
            }
        })

        res.json({
            message: "Cliente eliminado: " + req.params.id
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}