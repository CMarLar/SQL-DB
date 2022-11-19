const { response, request } = require("express");//Importa dos métodos de express. Esto se hace para informar las funciones del archivo.
const connection = require("../database")//importa la conexión con la base de datos

function getMarks(request,response)
{
    let sql;

    if(request.query.id != null){
    //    sql = "SELECT * FROM marks WHERE student_id =" + request.query.id
    sql = "SELECT first_name,last_name,title, mark FROM students JOIN marks on (students.studentID = marks.student_id) JOIN subjects on (marks.subject_id = subjects.subject_id) WHERE studentID = " + request.query.id
    }
    else{
        console.log("Introduce un ID");
    }
    

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else{response.send(result)}
    })
}


function postMarks(request,response)
{
    console.log(request.body);
    let sql = "INSERT INTO marks (student_id,subject_id,date,mark) " +
                "VALUES ('"+request.body.student_id+"', '"+
                            request.body.subject_id+ "', '"+
                            request.body.date+ "', '"+
                            request.body.mark+ "')";
    console.log(sql);

    connection.query(sql, (err,result) =>{
        if(err){console.log(err);}
        else
        {
            console.log(result);

            if(result)
            response.send(result);
            
            else{response.send("-1")}
        }
    })
}

function putMarks(request,response)
{
    console.log(request.body);
    let params = [request.body.student_id,request.body.subject_id,request.body.date,request.body.mark,request.body.mark_id]

    //COALESCE: palabra reservada de sql que indica que si no se indica un parámetro nuevo en SET, deje el que estaba antes.
    let sql = "UPDATE marks SET student_id = COALESCE(?, student_id) , " + 
                "subject_id = COALESCE(?, subject_id) , " + 
                "date = COALESCE(?, date) , " + 
                "mark = COALESCE(?, mark)  WHERE mark_id = ?";
    console.log(sql); 
    connection.query(sql, params,(err, result)=> 
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}

function deleteMarks(request,response)
{
    console.log(request.body);//
    let sql = "DELETE FROM marks WHERE mark_id = '" + request.body.id + "'";
    console.log(sql); 
    connection.query(sql, (err, result) =>
    {
        if (err) 
            console.log(err);
        else 
        {
            response.send(result);
        }
    })
}

module.exports = {getMarks,postMarks,putMarks,deleteMarks}

