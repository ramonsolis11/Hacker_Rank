/**
EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende de lo siguiente: 
•	Examen =20%
•	tareas = 40%
•	asistencia = 10%
•	investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.*/

function calcularNotaFinal(notaExamen, notaTareas, notaAsistencia, notaInvestigacion) {

        let notaFinal = notaExamen * 0.2 + notaTareas * 0.4 +
        notaAsistencia * 0.1 + notaInvestigacion * 0.3;
    
        return notaFinal;
    }
    
    function mostrarDatosAlumno(Nombre, Carnet, notaFinal) {
        swal.fire({
        title: "Datos del Alumno",
        html: `<p>Nombre: ${Nombre}</p><p>Carnet: ${Carnet}</p><p>Nota Final: ${notaFinal}</p>`,
        icon: "info"
        });
    }
    
    function DatosAlumno() {
        swal.fire({
        title: "Ingresar los Datos del Alumno",
        html:
            '<input id="swal-input-nombre" class="swal2-input" placeholder="Nombre">' +
            '<input id="swal-input-carnet" class="swal2-input" placeholder="Carnet">' +
            '<input id="swal-input-examen" class="swal2-input" placeholder="Examen">' +
            '<input id="swal-input-tareas" class="swal2-input" placeholder="Tareas">' +
            '<input id="swal-input-asistencia" class="swal2-input" placeholder="Asistencia">' +
            '<input id="swal-input-investigacion" class="swal2-input" placeholder="Investigación">',
        focusConfirm: false,
        preConfirm: () => {
            let Nombre = document.getElementById("swal-input-nombre").value;
            let Carnet = document.getElementById("swal-input-carnet").value;
            let notaExamen = parseFloat(document.getElementById("swal-input-examen").value);
            let notaTareas = parseFloat(document.getElementById("swal-input-tareas").value);
            let notaAsistencia = parseFloat(document.getElementById("swal-input-asistencia").value);
            let notaInvestigacion = parseFloat(document.getElementById("swal-input-investigacion").value);
    
            let notaFinal = calcularNotaFinal(notaExamen, notaTareas, notaAsistencia, notaInvestigacion);
            mostrarDatosAlumno(Nombre, Carnet, notaFinal.toFixed(2));
        }
    });
}