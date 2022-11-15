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
let sql = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Carlos','Marina',1)";
connection.query(sql,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql1 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Irene','Becker',1)";
connection.query(sql1,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql2 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Carlos','Gorostiaga',1)";
connection.query(sql2,(err,result) => {
if(err){console.log(err);}
else{
    console.log("Alumno añadido");
    console.log(result);
}
});

let sql3 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Pablo','Sarmiento',2)";
connection.query(sql3,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql4 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Javier','Fernández',2)";
connection.query(sql4,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql5 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Fanel Adrián','Pop',2)";
connection.query(sql5,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql6 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Miguel','Generoso',3)";
connection.query(sql6,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql7 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Irene','Húngaro',3)";
connection.query(sql7,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql8 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Adam','Herrero',3)";
connection.query(sql8,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });

let sql9 = "INSERT INTO students (first_name,last_name,group_id) VALUES ('Manuel','López',3)";
connection.query(sql9,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Alumno añadido");
        console.log(result);
    }
    });