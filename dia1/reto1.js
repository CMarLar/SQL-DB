//Este archivo muestra los dos últimos puntos del reto 1 del primer día del módulo 4.

//Después de hacer npm init y npm install mysql2, establecemos la conexión.

let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "MarinaCarlos1986Codenotch",
        database:"codenotch"
    }
);

//esta función conecta y si no sale bien da error
connection.connect((error) => {
    if(error){console.log(error);}
    else{console.log("Connection established");}
});

//en qué caso habría que hacer connection.end?


//CREAR COLUMNA
// let sql = "ALTER TABLE tablita ADD columnacreada VARCHAR(100)";
// connection.query(sql,(err,result) => {
//     if (err){console.log(err);}
//     else{
//         console.log("Columna añadida");
//         console.log(result);
//     }
// });

// //BORRAR COLUMNA
// let sql2 = "ALTER TABLE tablita DROP COLUMN columnaparaborrar";
// connection.query(sql2,(err,result) =>{
//     if(err){console.log(err);}
//     else{
//         console.log("Columna eliminada");
//         console.log(result);
//     }
// })


// //UPDATE
// let sql3 = "UPDATE alumnos SET dirección = 'Calle introducida para Menchu' ";
// connection.query(sql3,(err,result) => {
//     if (err){console.log(err);}
//     else{
//         console.log("Datos actualizados");
//         console.log(result);
//     }
// });

// //DROP
let sql4 = "DROP TABLE tablita"
connection.query(sql4,(err,result) => {
if(err){console.log(err);}
else{
    console.log("Tabla eliminada");
    console.log(result);
}
});
