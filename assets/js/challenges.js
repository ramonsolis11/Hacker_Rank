/*EJERCICIO 9:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
· La cantidad de valores negativos ingresados.
· La cantidad de valores positivos ingresados.
· La cantidad de múltiplos de 15.
· El valor acumulado de los números ingresados que son pares.*/

function contarValores(){
    let array = [];

    //quiero un array para cada condicion y los sacare de un array con todos los valores ingresados
    let positivos = [];
    let negativos = [];
    let multiplo = [];
    let pares = [];

    for(let i = 0; i < 10; i++){
        let numero = Number(prompt('ingrese un numero'));
        array.push(numero);
        console.log(array);
    }

    //para cada elemento del array inicial se evalua a que condicion corresponde 
    //y se asigna al array que lo necesite
    array.forEach(Element => {
        if(Element < 0){
            negativos.push(Element);
        }else if(Element % 2 === 0 && Element > 0){
            pares.push(Element);
            positivos.push(Element);
        }else if(Element % 15 === 0 && Element > 0){
            multiplo.push(Element);
            positivos.push(Element);
        }else if(Element > 0){
            positivos.push(Element);
        }
    })

    //aqui se muestra los resultados en una alerta

    Swal.fire({
        title: 'Resultado',
        html: '<p><strong>La cantidad de valores negativos ingresados es: </strong> ' + negativos.length + '</p>' +
            '<p><strong>La cantidad de valores positivos ingresados es: </strong> ' + positivos.length + '</p>' +
            '<p><strong>La cantidad de valores multiplos de 15 ingresados es: </strong> ' + multiplo.length + '</p>' +
            '<p><strong>La cantidad de valores pares ingresados es: </strong> ' + pares.length + '</p>',
            confirmButtonText: 'Aceptar',
            icon: 'info',
        });
};

/*EJERCICIO 10:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 
del número ingresado por el usuario.*/

function obtenerNumero(){
    Swal.fire({
        title: "Ingrese un número",
        input: "number",
        inputAttributes: {
            min: 1,
        },
        showCancelButton: true,
        confirmButtonText: "Mostrar",
        showLoaderOnConfirm: true,
        //trabajando con el dato ingresado
        inputValidator: (numero) => {
            if (numero < 1 || numero > 10) {
                return "el numero ingresado debe comprender entre 1 y 10";
            }else{
                return mostrarTablaMultiplicar(numero);
            }
        },
    });
}

//funcion para generar la tabla
function mostrarTablaMultiplicar(numero) {
    let tabla = "<h2>Tabla de multiplicar del " + numero + "</h2>";
    tabla += "<table>";
    tabla += "<tr><th>Factor</th><th>Resultado</th></tr>";

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        tabla += "<tr><td>" + numero + " x " + i + "</td><td>" + resultado + "</td></tr>";
    }

    tabla += "</table>";

    Swal.fire({
        title: "Tabla de Multiplicar",
        html: tabla,
        icon: "info",
    });
};

/*EJERCICIO 11:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
· Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
· Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
· Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
· Si no está entre ningún caso anterior la frase “Temperatura desconocida”*/

async function obtenerTemperatura(){
    const { value: temperature } = await Swal.fire({
        title: 'Temperatura',
        input: 'text',
        //validacion de el dato ingresado
        inputValidator: (value) => {
            if (!value) {
                return 'Debes ingresar una temperatura';
            }
            if (isNaN(value)) {
                return 'Ingresa un valor numérico válido';
            }
            return null;
            },
                showCancelButton: true,
                confirmButtonText: 'Convertir'
        });
//conversion de temeratura
        if (temperature) {
            const celsius = parseFloat(temperature);
            const fahrenheit = (celsius * 1.8) + 32;

            let message;
        if (fahrenheit >= 14 && fahrenheit < 32) {
            message = `${fahrenheit.toFixed(2)} °F - Temperatura Baja`;
        } else if (fahrenheit >= 32 && fahrenheit < 68) {
            message = `${fahrenheit.toFixed(2)} °F - Temperatura Adecuada`;
        } else if (fahrenheit >= 68 && fahrenheit < 96) {
            message = `${fahrenheit.toFixed(2)} °F - Temperatura Alta`;
        } else {
            message = "Temperatura Desconocida";
        }

        Swal.fire({
            title: 'Resultado',
            text: message,
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
        }
    };

/*   EJERCICIO 12:
Se cuenta con la siguiente información:
· Las edades de 5 estudiantes del turno mañana.
· Las edades de 6 estudiantes del turno tarde.
· Las edades de 11 estudiantes del turno noche.
Nota: Las edades de cada estudiante se deberán ingresar por la web.*/

function ingresarEdades(){
    Swal.fire({
        title: 'datos de estudiantes',
        html:'<h1>Estudiantes de la mañana</h1><input type = "text" placeholder="ingrese edad del estudiante">' +
        '<input type = "text" placeholder="ingrese edad del estudiante">' + '<input type = "text" placeholder="ingrese edad del estudiante"></input>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<input type = "text" placeholder="ingrese edad del estudiante"></input><br>' +
        '<h1>Estudiantes de la tarde</h1><input type = "text" placeholder="ingrese edad del estudiante">' +
        '<input type = "text" placeholder="ingrese edad del estudiante">' + '<input type = "text" placeholder="ingrese edad del estudiante"></input>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<input type = "text" placeholder="ingrese edad del estudiante"></input><br>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<h1>Estudiantes de la noche</h1>' + '<input type = "text" placeholder="ingrese edad del estudiante">' +
        '<input type = "text" placeholder="ingrese edad del estudiante">' + '<input type = "text" placeholder="ingrese edad del estudiante"></input>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<input type = "text" placeholder="ingrese edad del estudiante"></input><br>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<input type = "text" placeholder="ingrese edad del estudiante"></input><br>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<input type = "text" placeholder="ingrese edad del estudiante"></input><br>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>' + '<input type = "text" placeholder="ingrese edad del estudiante"></input><br>' +
        '<input type = "text" placeholder="ingrese edad del estudiante"></input>',
        confirmButtonText: 'ingresar',
    })
};









