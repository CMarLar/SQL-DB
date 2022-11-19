const {Router} = require('express');
const router = Router();//¿Qué es Router()? Es una extensión de las rutas de la aplicación
const additionalCtrl = require("../controller/additional.controller");//CAMBIAR CONTROLADOR,m también en las rutas


router.get('/media', additionalCtrl.getAverage);//Obtiene la nota media del id del alumno pasado por parámetro.

router.get('/apuntadas', additionalCtrl.getSignedUp);//La lista de las asignaturas a la que están apuntadas el alumno con id pasado por parámetro.

router.get('/impartidas', additionalCtrl.getTaughtSubjects);//La lista de las asignaturas que imparte el profesor cuyo id es pasado por parámetro. Sin parámetro, Devuelve los nombres y apellidos de todos los profesores y los nombres de las asignaturas a la que imparten.

module.exports = router;