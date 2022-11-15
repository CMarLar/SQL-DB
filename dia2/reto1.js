let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "MarinaCarlos1986Codenotch",
        database:"codenotch2"
    }
);

connection.connect((error) => {
    if(error){console.log(error);}
    else{console.log("Connection established");}
});


// //Calcular la nota media de los alumnos de la asignatura 1.
// let average = "SELECT AVG (mark) FROM marks WHERE subject_id = 1";
// connection.query(average,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Nota media");
//         console.log(result);
//     }
//     });

// //Calcular el número total de alumnos que hay en el bootcamp.
// let totalStudents = "SELECT COUNT(*) FROM students";
// connection.query(totalStudents,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Total alumnos");
//         console.log(result);
//     }
//     });


// //Listar todos los campos de la tabla “groups”.
// let groups = "SHOW COLUMNS FROM codenotch2.groups "
// connection.query(groups,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Todos los campos de la tabla grupos");
//         console.log(result);
//     }
//     });

//Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).

// let editNotes = "DELETE FROM marks WHERE mark>5 AND date>'2020-12-31' AND date<'2022-01-01'"
// connection.query(editNotes,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Notas del último año editadas");
//         console.log(result);
//     }
//     });

//Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.

// let studentsData = "SELECT * FROM students WHERE date BETWEEN '2021-12-31' AND '2023-01-01'";
// connection.query(studentsData,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Estudiantes de este año");
//         console.log(result);
//     }
//     });

//Calcular el numero de profesores que hay por cada asignatura
let teachersPerSubject = "SELECT subject_id, COUNT(*) FROM subjects_teacher GROUP BY subject_id";
connection.query(teachersPerSubject,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesores por asignatura");
        console.log(result);
    }
    })