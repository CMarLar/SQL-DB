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

//Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.
let params = [];
let sql="SELECT first_name,last_name,title FROM teacher JOIN subjects ON (teacher.teacher_id = subjects.subject_id)";
connection.query(sql,(err,result) =>{
    if(err){console.log(err);}
    else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})