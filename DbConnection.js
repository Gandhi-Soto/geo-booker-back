// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Archivo de conexion a MySQL usando Sequelize           #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : Nuevas credenciales para la base de datos              #
//   --# Marca de cambio     : BCMC-250624                                            #
//   ---------------------------------------------------------------------------------#-->

import { Sequelize } from "sequelize";

// INICIO DE CAMBIO: BCMC-250624
const db = new Sequelize('geo', "test", "ThisIsATest8", {
    host: '198.12.240.20',
    port: 3306,
    dialect: 'mysql'
});
// FIN DE CAMBIO: BCMC-250624

export default db;