// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 17/06/2024      #
//   --# Descripcion General : Middleware para manejar los cors del back              #
//   ---------------------------------------------------------------------------------#-->
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Fecha               : 25/06/2024                                             #
//   --# Modificacion        : Se agregaron dominios de producción para que puedan    #
//                             acceder a la API                                       #
//   --# Marca de cambio     : BCMC-250624                                            #
//   ---------------------------------------------------------------------------------#-->

import cors from "cors";

const ACCEPTED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:5176",
    "http://localhost:5177",
    // INICIO DE CAMBIO: BCMC-250624
    "https://667b4a1e3ba87791ce774249--superlative-mochi-c4b285.netlify.app",
    "https://geobooker.com",
    "https://geobooker.godaddysites.com",
    // FIN DE CAMBIO: BCMC-250624
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors ({
    origin: (origin, callback) => {
        

        if (acceptedOrigins.includes(origin)) {
            return callback(null, true);
        }

        if (!origin) {
            return callback(null, true);
        }

        return callback(new Error("No permitido por CORS"));
    },
})