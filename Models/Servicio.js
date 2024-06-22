// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Modelo para la tabla de los servicios                  #
//   ---------------------------------------------------------------------------------#-->

import db from "../DbConnection.js";
import { DataTypes } from "sequelize";

const Servicio = db.define("servicio", {
    id_servicio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    servicio_nombre: {
        type: DataTypes.STRING(60),
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
}, {
    tableName: "servicio",
    timestamps: false
});

export default Servicio;