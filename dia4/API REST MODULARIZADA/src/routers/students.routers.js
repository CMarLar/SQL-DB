const {Router} = require('express');
const router = Router();//¿Qué es Router()? Es una extensión de las rutas de la aplicación
const studentCtrl = require("../controller/students.controller");


//front:
// const frontCtrl = require("../index")

// router.get('/prueba', frontCtrl.getProfessionals)




router.get('/alumnos', studentCtrl.getStudents);

// router.get('/profesional', profCtrl.getProfessional);
//este tiene que ser la misma función que professionals, pero para sacar a un estudiante

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/alumnos', studentCtrl.postStudents);

router.put('/alumnos', studentCtrl.putStudents);

router.delete('/alumnos', studentCtrl.deleteStudents);

module.exports = router;