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


//INTRODUCCIÓN DE 5 PROFESORES
let sql = "INSERT INTO teacher (first_name,last_name) VALUES ('José','Herrera')";
connection.query(sql,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql1 = "INSERT INTO teacher (first_name,last_name) VALUES ('Carmen','Martín')";
connection.query(sql1,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql2 = "INSERT INTO teacher (first_name,last_name) VALUES ('Daniel','Vera')";
connection.query(sql2,(err,result) => {
if(err){console.log(err);}
else{
    console.log("Profesor añadido");
    console.log(result);
}
});

let sql3 = "INSERT INTO teacher (first_name,last_name) VALUES ('Iván','Cuesta')";
connection.query(sql3,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql4 = "INSERT INTO teacher (first_name,last_name) VALUES ('Pablo','Talavante')";
connection.query(sql4,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql5 = "INSERT INTO teacher (first_name,last_name) VALUES ('José Luis','Llorente')";
connection.query(sql5,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql6 = "INSERT INTO teacher (first_name,last_name) VALUES ('Alberto','Fernández')";
connection.query(sql6,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql7 = "INSERT INTO teacher (first_name,last_name) VALUES ('Mercedes','Amézquita')";
connection.query(sql7,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql8 = "INSERT INTO teacher (first_name,last_name) VALUES ('Matías','Álvarez')";
connection.query(sql8,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });

let sql9 = "INSERT INTO teacher (first_name,last_name) VALUES ('Macarena','González')";
connection.query(sql9,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Profesor añadido");
        console.log(result);
    }
    });