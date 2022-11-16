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

//Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.
let params = [];
let sql = "SELECT first_name,last_name,title FROM students JOIN subjects ON (students.studentID = subjects.subject_id)";
connection.query(sql,params,(err,result) =>{
    if(err){console.log(err);}
    else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})