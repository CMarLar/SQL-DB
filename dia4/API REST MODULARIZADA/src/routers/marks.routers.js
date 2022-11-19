const {Router} = require('express');
const router = Router();//¿Qué es Router()? Es una extensión de las rutas de la aplicación
const markCtrl = require("../controller/marks.controller");


router.get('/notas', markCtrl.getMarks);//Obtiene todas las notas del id del alumno pasado por parámetro,

router.post('/notas', markCtrl.postMarks);//Añade una nota

router.put('/notas', markCtrl.putMarks);//Modifica una nota

router.delete('/notas', markCtrl.deleteMarks);//Borra una nota

module.exports = router;