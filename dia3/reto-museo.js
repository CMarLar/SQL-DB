let mysql = require("mysql2");
let connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "MarinaCarlos1986Codenotch",
        database: "museo",
    }
);
connection.connect((error) => {
    if (error){console.log(error);}
    else{console.log("Connection OK");}
});


//Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y     email) de la persona que los ha prestado.

// let params = []
// let sql= "SELECT title,exhibit,start_date,end_date,first_name,last_name FROM museo.pieces JOIN lent_items on (pieces.piece_id = lent_items.piece_id) JOIN ownerdata on (lent_items.owner_id = ownerdata.ownerdata_id)"
// connection.query(sql,params,(err,result) =>{
//     if(err){console.log(err);}
//     else{
//         console.log("Datos obtenidos");
//         console.log(result);
//     }
// })

//Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en itinerancia y cuántos almacenados.


let params1 = []
let sql1= "SELECT COUNT(piece_id),collection_type FROM museo.pieces JOIN collections on (pieces.collection_id = collections.collection_id) GROUP by collection_type ORDER BY COUNT(piece_id) DESC"
connection.query(sql1,params1,(err,result) =>{
    if(err){console.log(err);}
    else{
        console.log("Datos obtenidos");
        console.log(result);
    }
})