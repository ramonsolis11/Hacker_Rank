/* EJERCICIO 1: Crear una 'función' que en base a la 'edad' que ingreso el usuario
devolver un mensaje si la persona es mayor de edad o no. 
-Utilizar para la condición el operador ternario. */

function verificarEdad() {
    //TODO: Iniciamos una ventana emergente utilizando SweetAlert2
    swal.fire({
        // Configurar la ventana emergente 'alert'
        title: "Verificar Edad",
        text: "Ingresar tu Edad:",
        input: "number",
        inputAttributes: {
            min: 0,
            max: 100,
            step: 1
        },
        showCancelButton: true,  // Muestra un boton de cancelar en la ventana emergente
        confirmButtonText: "Verificar",  //texto para el boton de confirmacion
        showLoaderOnConfirm: true, // muestra un indicar de carga

        preConfirm:(edad) => {  // Funtion que se ejecuta antes de cerrar la ventana
            // Comienzo a condicionar o evaluar la edad ingresada
            edad >= 18 ?  "Eres mayor de edad" : "Eres menos de edad";
        },
        allowOutsideClick: () => !swal.isLoading()  // permite hacer click fuera de la ventana emergente para poder cerrarla, excepto cuando se esta cargando.

    }).then((result) =>{
        if (result.isConfirmed) {
            swal.fire({
                title: "Verificacion de Edad",
                text: result.value,
                icon: "info"
            });
        }
    });
}