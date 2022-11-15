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

let sql = "INSERT INTO subjects (title) VALUES ('Fundamentos de programación')";
connection.query(sql,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql1 = "INSERT INTO subjects (title) VALUES ('Maquetación')";
connection.query(sql1,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql2 = "INSERT INTO subjects (title) VALUES ('Introducción al backend')";
connection.query(sql2,(err,result) => {
if(err){console.log(err);}
else{
    console.log("Asignatura añadida");
    console.log(result);
}
});

let sql3 = "INSERT INTO subjects (title) VALUES ('Bases de datos relacionales')";
connection.query(sql3,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql4 = "INSERT INTO subjects (title) VALUES ('Mongo DB')";
connection.query(sql4,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql6 = "INSERT INTO subjects (title) VALUES ('Angular js')";
connection.query(sql6,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql7 = "INSERT INTO subjects (title) VALUES ('Introducción a Python')";
connection.query(sql7,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql8 = "INSERT INTO subjects (title) VALUES ('Fundamentos matemáticos')";
connection.query(sql8,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql9 = "INSERT INTO subjects (title) VALUES ('Lengua castellana y literatura')";
connection.query(sql9,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql10 = "INSERT INTO subjects (title) VALUES ('Inglés')";
connection.query(sql10,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });