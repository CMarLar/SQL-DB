let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "MarinaCarlos1986Codenotch",
        database: "codenotch2",
    }
);
connection.connect((error) => {
    if (error){console.log(error);}
    else{console.log("Connection OK");}
});

/*
Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y
apellidos del profesor que la imparte.

NOTA: Para que no aparezcan notas repetidas solo debe haber un profesor por asignatura y un grupo
por asignatura y profesor. Todos los retos hay que hacerlos en Workbench y en Node.js con sentencias
preparadas.
*/
let params = []
let sql= "SELECT COUNT(studentID),title,teacher.first_name,teacher.last_name FROM students JOIN teams ON (students.group_id = teams.group_id) JOIN subjects_teacher ON (teams.group_id = subjects_teacher.group_id) JOIN subjects ON (subjects_teacher.subject_id = subjects.subject_id) JOIN teacher ON (subjects_teacher.teacher_id = teacher.teacher_id) GROUP BY subjects.title"
connection.query(sql,params,(err,result) =>{
    if(err){console.log(err);}
    else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})