// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Archivo de conexion a MySQL usando Sequelize           #
//   ---------------------------------------------------------------------------------#-->

import { Sequelize } from "sequelize";

const db = new Sequelize('geo_booker_pruebas', "capacitacion", "capacita123", {
    host: '10.147.18.125',
    port: 3308,
    dialect: 'mysql'
});

export default db;