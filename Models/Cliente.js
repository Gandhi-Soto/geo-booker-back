// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Modelo para definir los datos de la tabla clientes     #
//   ---------------------------------------------------------------------------------#-->

import db from "../DbConnection.js";
import { DataTypes } from "sequelize";

const Cliente = db.define('cliente', {
    telefono: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    apellido_paterno: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    apellido_materno: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM("Masculino", "Femenino", "Otro"),
        allowNull: false
    },
    nombre_negocio: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    codigo_postal: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    municipio: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    colonia: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    calle: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    numero_domicilio: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_modificacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fk_id_categoria_servicio: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'cliente',
    timestamps: false,
    indexes: [
        {
            unique: true,
            fields: ['telefono', 'email']
        }
    ]
});

export default Cliente;