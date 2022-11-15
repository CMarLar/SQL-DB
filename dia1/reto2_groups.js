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

//no entiendo por qué no está cogiendo el código y da fallo de sintaxis . RESPUESTA: groups es una palabra reservada


let sql = "INSERT INTO codenotch2.groups (name) VALUES (\"Grupo 11\")";//sintaxis con nombre de la base de datos para evitar problemas
connection.query(sql,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Grupo añadido");
        console.log(result);
    }
    });



