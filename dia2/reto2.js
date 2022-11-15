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

//Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.
let sql = "SELECT student_id,mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark>8 AND date BETWEEN '2021-12-31' AND '2023-01-01')";
connection.query(sql,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Datos obtenidos");
        console.log(result);
    }
    })

//Obtén la media de las notas que se han dado en el último año por asignatura.
let sql2 = "SELECT AVG(mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-12' GROUP BY subject_id";
connection.query(sql2,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Media agrupada por asignaturas");
        console.log(result);
    }
    })

//Obtén la media aritmética de las notas que se han dado en el último año por alumno.
let sql3 = "SELECT AVG(mark) FROM marks WHERE date BETWEEN '2022-01-01' AND '2022-12-12' GROUP BY student_id";
connection.query(sql3,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Media agrupada por estudiantes");
        console.log(result);
    }
    })
