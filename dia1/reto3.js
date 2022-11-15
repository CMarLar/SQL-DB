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

/*Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.

• Haz una actualización de los datos en la tabla que corresponda teniendo en cuenta que los
profesores va a poner un 5 a los alumnos cuya nota sea inferior a 5.*/

// let sql = "DELETE FROM codenotch2.marks WHERE date<'2012-11-15'";
// connection.query(sql,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Notas borradas");
//         console.log(result);
//     }
//     });

let sql2 = "UPDATE marks SET mark ='5' WHERE mark<'5'";
connection.query(sql2,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Notas actualizadas");
        console.log(result);
    }
    });