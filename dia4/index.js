//FRONT JS

//const { stringify } = require("querystring");

//Clase
class Student
{
id;
first_name;
last_name;
date;
    constructor(first_name,last_name,date,group_id){
        this.first_name = first_name;
        this.last_name = last_name;
        this.date = date;
        this.group_id = group_id;
    }
}



///////////GET//////////////
function getStudent()
{
    let id = document.getElementById("id").value;

    if (id != "")
    {
        let url = "http://localhost:3000/alumnos?id=" + id;//indica a qué url se tiene que conectar

        let param = 
        {//indica método y lo que queremos enviar al endpoint
            headers: {"Content-type": "application/json; charset= UTF-8"},
            method: "GET"
        }
        fetch(url, param)
        .then((data) =>
        {
            return data.json()
        })
        .then((result) =>
        {    
            console.log(result);  
            if (result.length > 0)
            {
                document.getElementById("results").innerHTML =
                `
                <span style="font-weight: 500;">ID: </span><span>${result[0].studentID}</span>
                <br>
                <span style="font-weight: 500;">Nombre: </span><span>${result[0].first_name}</span>
                <br>
                <span style="font-weight: 500;">Apellido: </span><span>${result[0].last_name}</span>
                <br>
                <span style="font-weight: 500;">Fecha de Ingreso: </span><span>${result[0].date}</span>
                <br>
                <span style="font-weight: 500;">Grupo: </span><span>${result[0].group_id}</span>
                `
            }
            else
                showToast("ERROR: el usuario con id: " +  id + " no existe", "bg-danger")

        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
    else
        {
            let url = "http://localhost:3000/alumnos"

            let param = 
            {//indica método y lo que queremos enviar al endpoin
                headers: {"Content-type": "application/json; charset= UTF-8"},
                method: "GET"
            }
            fetch(url, param)
            .then((data) =>
            {
                return data.json()
            })
            .then((result) =>{
                console.log(result);

                let shownData = document.getElementById('results')
                for (let i = 0; i < result.length; i++) {
                shownData.innerHTML += 
                `
                <span style="font-weight: 500;">ID: </span><span>${result[i].studentID}</span>
                <br>
                <span style="font-weight: 500;">Nombre: </span><span>${result[i].first_name}</span>
                <br>
                <span style="font-weight: 500;">Apellido: </span><span>${result[i].last_name}</span>
                <br>
                <span style="font-weight: 500;">Fecha de Ingreso: </span><span>${result[i].date}</span>
                <br>
                <span style="font-weight: 500;">Grupo: </span><span>${result[i].group_id}</span>
                <br>
                <br>
                `

                }
            })
            //showToast("AVISO: Campo id no informado", "bg-warning")
        }
}

///////////POST//////////////
function postStudent()
{
    debugger;
    let newStudent = new Student(document.getElementById("first_name").value,
                        document.getElementById("last_name").value,
                        document.getElementById("date").value,
                        document.getElementById("group_id").value,)
    
    const url = "http://localhost:3000/alumnos";


    if (validar(newStudent))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(newStudent),
                method: "POST"
            }

        fetch(url, param)
        .then((data) =>
        {
            return data.json()
        })
        .then((result) =>
        {
            if (result == "-1")
                showToast("ERROR: Error al insertar el dato" , "bg-danger")
            else
                showToast("Alumno creado con id: " + result.insertId, "bg-success")//¿Cuál sería la forma de acceder al result?

            console.log(result)
        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

///////////PUT//////////////
function putStudent() {
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let date = document.getElementById("date").value;
    let group_id = document.getElementById("group_id").value;
    let studentID = document.getElementById("id").value;

    //esto se mete para que funciones COALESCE
    if(first_name == ''){
        first_name = null;
    }
    if(last_name == ''){
        last_name = null;
    }
    if(date == ''){
        date= null;
    }
    if(group_id == ''){
        group_id = null;
    }
    
    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "PUT",
        body: JSON.stringify({first_name: first_name,last_name: last_name,date: date,group_id: group_id, studentID: studentID})
    };
    
    let url = "http://localhost:3000/alumnos"//si lo pedimos por el body, en teoría no necesitamos ?id="+ id en la url
    
    if (id != "") {
        fetch(url, param)
        .then((data) => {
        return data.json();
        })
        .then((data) => {
        console.log(data);
        showToast("Alumno modificado", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        showToast("Error", "bg-danger")//no probado después de modificar alert
        })
    
        } else {
        showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger");
        }
    }
    
///////////DELETE//////////////
    function deleteStudent() {
        let id = document.getElementById("id").value;

        let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
        method: "DELETE",
        body: JSON.stringify({id: id})
        };
    
        let url = "http://localhost:3000/alumnos"
    
        if (id) {
            // professionals.splice(id,1);//borramos con splice el elemento igual al id.
            fetch(url,param)
            .then((data) =>{
            return data.json()
            })
            .then((data) => {
            console.log(data);
            showToast("Alumno eliminado", "bg-success")
            })
            .catch((error) => {
            console.log(error);
            showToast("Error", "bg-danger")
            })
        } else {
            showToast("Rellena el campo ID","bg-warning");
        }
    }



//Funciones de validación y Toast:

function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}

function validar(newStudent)
{
    resultado = false
    if (newStudent.first_name == "" || newStudent.first_name == "null")
    {
        showToast("AVISO: Campo 'Nombre' no informado", "bg-warning")
    }
    else if (newStudent.last_name == "" || newStudent.last_name == "null")
    {
        showToast("AVISO: Campo 'Apellido' no informado", "bg-warning")
    }
    else if (newStudent.date == "" || newStudent.date == "null")
    {
        showToast("AVISO: Campo 'Fecha de Ingreso' no informado", "bg-warning")
    }
    else if (newStudent.group_id == "" || newStudent.group_id == "null")
    {
        showToast("AVISO: Campo 'ID de Grupo' no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}





