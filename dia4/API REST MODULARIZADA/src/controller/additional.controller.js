const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos

//GET -> Nota media del alumno pasado por id
function getAverage (request,response)
{
    let sql = "SELECT ROUND (AVG(mark),2) FROM marks WHERE student_id =" + request.query.id
    //ROUND(numARedondear,2) -> Redondea el número a dos decimales, pueden ser 3, 4, etc
    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else{response.send(result)}
    })
}
//GET -> lista de las asignaturas a la que están apuntadas el alumno con id pasado por parámetro.
//Sin parámetro, devuelve nombres y apellidos de todos los alumnos y los nombres de las asignaturas a la que están apuntadas.
function getSignedUp (request,response)
{
    let sql;
    if(request.query.id == null) {
        sql = "SELECT studentID,first_name,last_name,title FROM codenotch2.students JOIN marks on (students.studentID = marks.student_id) JOIN subjects on (marks.subject_id = subjects.subject_id)";
    }
    else{
        sql = "SELECT studentID,first_name,last_name,title FROM codenotch2.students JOIN marks on (students.studentID = marks.student_id) JOIN subjects on (marks.subject_id = subjects.subject_id) WHERE studentID =" + request.query.id
    }

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else{response.send(result)}
    })
}
//GET -> //La lista de las asignaturas que imparte el profesor cuyo id es pasado por parámetro. Sin parámetro, Devuelve los nombres y apellidos de todos los profesores y los nombres de las asignaturas a la que imparten.
function getTaughtSubjects (request,response)
{
    let sql;
    if(request.query.id == null) {
        sql = "SELECT first_name,last_name,title FROM codenotch2.teacher JOIN subjects_teacher on (teacher.teacher_id = subjects_teacher.teacher_id) JOIN subjects on (subjects_teacher.subject_id = subjects.subject_id)";
    }
    else{
        sql = "SELECT first_name,last_name,title FROM codenotch2.teacher JOIN subjects_teacher on (teacher.teacher_id = subjects_teacher.teacher_id) JOIN subjects on (subjects_teacher.subject_id = subjects.subject_id) WHERE teacher.teacher_id =" + request.query.id
    }

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else{response.send(result)}
    })
}




module.exports = {getAverage,getSignedUp,getTaughtSubjects}