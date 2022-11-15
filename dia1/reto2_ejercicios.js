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

/*Setear todas las notas de los alumnos a ‘0’
• Obtener el nombre y el primer apellido de todos los estudiantes.
• Obtener todos los datos de los profesores.
• Realizar todos los puntos en MysqlWorkbench y luego en Node.js*/

// let sql = "SELECT first_name,last_name FROM students";
// connection.query(sql,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Datos de estudiante recogido");
//         console.log(result);
//     }
//     });

let sql2 = "SELECT * from teacher";
connection.query(sql2,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Datos de profesores recogidos");
        console.log(result);
    }
    });