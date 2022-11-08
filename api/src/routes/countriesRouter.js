const express = require('express');

const countriesRouter = express.Router();

//------countriesRouter.get '/' 
// traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
//obtener listado completo de paises
//-------get '/{idpais}
//detalle del pais
//solo los datos pedidos en la ruta de detalle de pais
//incluir datos de act turisticas correspondientes
//-------get '/?name='...'
//paises que coincidan con el nombre pasado como query
//si no existe mostrar un msj

module.exports = countriesRouter; 