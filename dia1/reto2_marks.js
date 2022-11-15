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

// let sql = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('9', '4', '2021-10-10', '4')";
// connection.query(sql,(err,result) => {
//     if(err){console.log(err);}
//     else{
//         console.log("Asignatura añadida");
//         console.log(result);
//     }
//     });

let sql1 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('10', '4', '2021-11-10', '6')";
connection.query(sql1,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql2 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('10', '5', '2021-10-10', '6')";
connection.query(sql2,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql3 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('8', '4', '2020-10-10', '5')";
connection.query(sql3,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql4 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('8', '5', '2012-12-11', '8')";
connection.query(sql4,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql5 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('6', '9', '2021-10-10', '6')";
connection.query(sql5,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });


let sql6 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('6', '9', '2015-01-02', '7')";
connection.query(sql6,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql7 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('5', '9', '2021-10-10', '10')";
connection.query(sql7,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql8 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('5', '10', '2021-10-10', '8')";
connection.query(sql8,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });

let sql9 = "INSERT INTO marks (student_id, subject_id, date, mark) VALUES ('7', '10', '2021-10-10', '4')";
connection.query(sql9,(err,result) => {
    if(err){console.log(err);}
    else{
        console.log("Asignatura añadida");
        console.log(result);
    }
    });