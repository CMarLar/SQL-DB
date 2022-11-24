//FRONT JS


//Clase
class Mark
{
    constructor(student_id,subject_id,date,mark){
        this.student_id = student_id;
        this.subject_id = subject_id;
        this.date = date;
        this.mark = mark;
        this.mark_id;
    }
}

//getMarks,postMarks,putMarks,deleteMarks

//////////GET//////////
function getMarks ()
{
    let student_id = document.getElementById("student_id").value;

    if (student_id == "" || student_id == null){
        showToast("Introduce un ID de alumno", "bg-warning")
    }
    else{
        let url = "http://localhost:3000/notas?id=" + student_id;
        let param = 
        {
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
                let shownData = document.getElementById('results')
                shownData.innerHTML = "";
                shownData.innerHTML = `<span style="font-weight: 500; text-decoration-underline"><u>Alumno: <u></span><span>${result[0].first_name} ${result[0].last_name}</span>
                <br><br>`
                for (let i = 0; i < result.length; i++) {
                    shownData.innerHTML +=
                    `
                    <span style="font-weight: 500;">Asignatura: </span><span>${result[i].title}</span>
                    <br>
                    <span style="font-weight: 500;">Calificación: </span><span>${result[i].mark}</span>
                    <br>
                    <br>
                    `  
                }
            }
            else
                showToast("ERROR: el alumno con id: " +  student_id + " no existe", "bg-danger")

        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

//////////POST//////////

function postMarks()
{
    let newMark = new Mark (document.getElementById("student_id2").value,
                        document.getElementById("subject_id").value,
                        document.getElementById("date").value,
                        document.getElementById("mark").value)

    console.log(newMark);                    
    const url = "http://localhost:3000/notas";

    if (validar(newMark))
    {
        let param = 
            {
                headers: {"Content-type": "application/json; charset= UTF-8"},
                body: JSON.stringify(newMark),
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
                showToast("Nueva nota creada con id: " + result.insertId, "bg-success")

            console.log(result)
        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })
    }
}

//////////PUT//////////
function putMarks()
{
    let student_id = document.getElementById("student_id2").value;
    let subject_id = document.getElementById("subject_id").value;
    let date = document.getElementById("date").value;
    let mark = document.getElementById("mark").value;
    let mark_id = document.getElementById("mark_id").value;

    //esto se mete para que funciones COALESCE
    if(student_id == ''){
        student_id = null;
    }
    if(subject_id == ''){
        subject_id = null;
    }
    if(date == ''){
        date= null;
    }
    if(mark == ''){
        mark = null;
    }

let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "PUT",
    body: JSON.stringify({student_id: student_id, subject_id: subject_id, date: date, mark: mark, mark_id: mark_id})
};

let url = "http://localhost:3000/notas"//si lo pedimos por el body, en teoría no necesitamos ?id="+ id en la url

if (mark_id != "") {
    fetch(url, param)
    .then((data) => {
    return data.json();
    })
    .then((data) => {
    console.log(data);
    showToast("Nota modificada", "bg-success")
    })
    .catch((error) => {
    console.log(error);
    showToast("Error", "bg-danger")
    })

    } else {
    showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger");
    }

}

///////////DELETE//////////////
function deleteMarks()
{
    let id = document.getElementById("mark_id").value;

    let param = {headers: {"Content-type": "application/json; charset= UTF-8",},
    method: "DELETE",
    body: JSON.stringify({id: id})
    };

    let url = "http://localhost:3000/notas"

    if (id) {
        fetch(url,param)
        .then((data) =>{
        return data.json()
        })
        .then((data) => {
        console.log(data);
        showToast("Nota eliminada", "bg-success")
        })
        .catch((error) => {
        console.log(error);
        showToast("Error", "bg-danger")
        })
    } else {
        showToast("Rellena el campo ID","bg-warning");
    }
}






//TOAST//
function showToast(message, color)
{
    document.getElementById("toastText").innerText=message;
    let toastElement  = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " "  + color;

    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}

///MODIFICA LA FUNCIÓN DE VALIDACÓN!!///
function validar(newMark)
{
    resultado = false
    if (newMark.student_id == "" || newMark.student_id == "null")
    {
        showToast("AVISO: Campo 'student_id' no informado", "bg-warning")
    }
    else if (newMark.subject_id == "" || newMark.subject_id == "null")
    {
        showToast("AVISO: Campo 'subject_id' no informado", "bg-warning")
    }
    else if (newMark.date == "" || newMark.date == "null")
    {
        showToast("AVISO: Campo 'Fecha' no informado", "bg-warning")
    }
    else if (newMark.mark == "" || newMark.mark == "null")
    {
        showToast("AVISO: Valor de la nota no informado", "bg-warning")
    }
    else
        resultado = true

    return resultado;
}