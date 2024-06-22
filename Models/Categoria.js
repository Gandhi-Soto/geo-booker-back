// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 18/06/2024      #
//   --# Descripcion General : Modelo para las categorias                             #
//   ---------------------------------------------------------------------------------#-->

import db from "../DbConnection.js";
import { DataTypes } from "sequelize";

const Categoria = db.define("categoria", {
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre_categoria: {
        type: DataTypes.STRING(40),
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
    tableName: "categoria",
    timestamps: false
});

export default Categoria;