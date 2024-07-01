// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Caleb Martinez Cavazos                                 #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 25/06/2024      #
//   --# Descripcion General : Middleware para manejar la API de geoNames. Se tuvo que#
//                             colocar como endpoint en el backend en lugar de solo   #
//                             mandarse llamar en el frontend por problemas de que el #
//                             navegador no permite llamadas a APIs sin HTTPS.        #
//   ---------------------------------------------------------------------------------#-->

import axios from 'axios';

export const geoNamesMiddleware = async (req, res) => {
    try {
        const { postalcode, country, username } = req.query;
        const response = await axios.get(`http://api.geonames.org/postalCodeLookupJSON`, {
            params: { postalcode, country, username }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send("Error al obtener datos de la API");
    }
}