//FRONT JS

const { stringify } = require("querystring");

function getAverage ()
{
    let id = document.getElementById("ID").value;

        let url = "http://localhost:3000/media?id=" + id;
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
            if (result.length > 0 && result[0]['ROUND (AVG(mark),2)'] != null)// lo de después del && es para evitar que muestre medias de alumnos que no existen o sin notas
            {
                document.getElementById("results").innerHTML =
                `
                <span style="font-weight: 500;">Id del alumno: </span><span>${id}</span>
                <br>
                <span style="font-weight: 500;">Nota media total: </span><span>${result[0]['ROUND (AVG(mark),2)']}</span>
                <br>
                <span style="font-weight: 500;">Calificación: </span><span></span>
                <br>
                `
                    //CÓMO ACCEDER A ATRIBUTOS DE OBJETOS QUE TIENEN NOMBRE CON PARÉNTESIS: con []: https://stackoverflow.com/questions/28142654/how-to-access-object-value-with-parentheses-in-name

            }
            else {
                showToast("ERROR: el alumno con id: " +  id + " no existe o no tiene ninguna calificación", "bg-danger")
                console.log("ERROR: el alumno con id: " +  id + " no existe o no tiene ninguna calificación", "bg-danger");
            }


        })
        .catch((error) =>
        {
            showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
            console.log(error)
        })

}

function getSignedUp()
{
    let id = document.getElementById("ID").value;

    if (id != "")
    {
        let url = "http://localhost:3000/apuntadas?id=" + id;

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

            if (result.length > 0)
            {
                console.log(result);

                let shownData = document.getElementById("results")
                for (let i = 0; i < result.length; i++) {
                    shownData.innerHTML +=
                    `
                    <span style="font-weight: 500;">Id del alumno: </span><span>${result[i].studentID}</span>
                    <br>
                    <span style="font-weight: 500;">Alumno: </span><span>${result[i].first_name} ${result[i].last_name}</span>
                    <br>
                    <span style="font-weight: 500;">Asignatura matriculada: </span><span>${result[i].title}</span>
                    <br>
                    <br>
                    `
                }
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
            let url = "http://localhost:3000/apuntadas"

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

                let shownData = document.getElementById("results")
                for (let i = 0; i < result.length; i++) {
                    shownData.innerHTML +=
                    `
                    <span style="font-weight: 500;">Id del alumno: </span><span>${result[i].studentID}</span>
                    <br>
                    <span style="font-weight: 500;">Alumno: </span><span>${result[i].first_name} ${result[i].last_name}</span>
                    <br>
                    <span style="font-weight: 500;">Asignatura matriculada: </span><span>${result[i].title}</span>
                    <br>
                    <br>
                    `
                }
            })
            .catch((error) =>
            {
                showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
                console.log(error)
            })
            //showToast("AVISO: Campo id no informado", "bg-warning")
        }
}


function getTaughtSubjects()
{
    let id = document.getElementById("ID").value;

    if (id != "")
    {
        let url = "http://localhost:3000/impartidas?id=" + id;

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

            if (result.length > 0)
            {
                console.log(result);
                let shownData = document.getElementById("results")
                for (let i = 0; i < result.length; i++) {
                    shownData.innerHTML +=
                    `
                    <span style="font-weight: 500;">Profesor: </span><span>${result[i].first_name} ${result[i].last_name}</span>
                    <br>
                    <span style="font-weight: 500;">Asignatura: </span><span>${result[i].title}</span>
                    <br>
                    <br>
                    `
                }
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
            let url = "http://localhost:3000/impartidas"

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
                let shownData = document.getElementById("results")
                for (let i = 0; i < result.length; i++) {
                    shownData.innerHTML +=
                    `
                    <span style="font-weight: 500;">Profesor: </span><span>${result[i].first_name} ${result[i].last_name}</span>
                    <br>
                    <span style="font-weight: 500;">Asignatura: </span><span>${result[i].title}</span>
                    <br>
                    <br>
                    `
                }
            })
            .catch((error) =>
            {
                showToast("ERROR: Fallo en la comunicación con el API REST", "bg-danger")
                console.log(error)
            })
            //showToast("AVISO: Campo id no informado", "bg-warning")
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