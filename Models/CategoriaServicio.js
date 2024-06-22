// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 19/06/2024      #
//   --# Descripcion General : Modelo para la tabla pivote de Categoria-Servicio      #
//   ---------------------------------------------------------------------------------#-->

import db from "../DbConnection.js";
import { DataTypes } from "sequelize";

const Categoria = db.define("categoria_servicio", {
    id_categoria_servicio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    fk_id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fk_id_servicio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_modificacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    tableName: "categoria_servicio",
    timestamps: false
});

export default Categoria;