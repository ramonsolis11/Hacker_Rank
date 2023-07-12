/*EJERCICIO 9:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
· La cantidad de valores negativos ingresados.
· La cantidad de valores positivos ingresados.
· La cantidad de múltiplos de 15.
· El valor acumulado de los números ingresados que son pares.*/

function filtrarValores() {
    Swal.fire({
        title: 'Carga de valores',
        html:
            '<input class="form-control col-12" id="valor1" type="text"><br>' +
            '<input class="form-control col-12" id="valor2" type="text"><br>' +
            '<input class="form-control col-12" id="valor3" type="text"><br>' +
            '<input class="form-control col-12" id="valor4" type="text"><br>' +
            '<input class="form-control col-12" id="valor5" type="text"><br>' +
            '<input class="form-control col-12" id="valor6" type="text"><br>' +
            '<input class="form-control col-12" id="valor7" type="text"><br>' +
            '<input class="form-control col-12" id="valor8" type="text"><br>' +
            '<input class="form-control col-12" id="valor9" type="text"><br>' +
            '<input class="form-control col-12" id="valor10" type="text"><br>',
        showCancelButton: true,
        confirmButtonText: "Continuar",
        preConfirm: () => {
            const valores = [];
            const inputs = document.querySelectorAll('input[id^="valor"]');

            for (let i = 0; i < inputs.length; i++) {
                valores.push(parseFloat(inputs[i].value));
            }

            const negativos = [];
            const positivos = [];
            const multiplos = [];
            const pares = [];

            valores.forEach(element => {
                if (element < 0) {
                    negativos.push(element);
                } else if (element % 2 === 0 && element > 0) {
                    pares.push(element);
                    positivos.push(element);
                } else if (element % 15 === 0 && element > 0) {
                    multiplos.push(element);
                    positivos.push(element);
                } else if (element > 0) {
                    positivos.push(element);
                }
            });

            const vNegativos = negativos.length;
            const vPositivos = positivos.length;
            const vMultiplos = multiplos.length;
            const vPares = pares.length;

            const array = [vNegativos, vPositivos, vMultiplos, vPares];

            return array;
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const arrayC = result.value;

            Swal.fire({
                title: 'Valores',
                html:
                    '<p><strong>La cantidad de valores negativos ingresados es:</strong> ' +
                    arrayC[0] +
                    '</p>' +
                    '<p><strong>La cantidad de valores positivos ingresados es:</strong> ' +
                    arrayC[1] +
                    '</p>' +
                    '<p><strong>La cantidad de valores múltiplos de 15 ingresados es:</strong> ' +
                    arrayC[2] +
                    '</p>' +
                    '<p><strong>El valor acumulado de los números ingresados que son pares es:</strong> ' +
                    arrayC[3] +
                    '</p>',
                confirmButtonText: 'OK',
                showCancelButton: true,
            });
        }
    });
}


/*function filtrarValores(){
    //alerta para ingresar los valores
        Swal.fire({
            title: 'Carga de valores',
            html:'<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>' +
            '<input class="form-control col-12" id="valor" type="text"><br>',
            showCancelButton: true,
            confirmButtonText: "Continuar",
            preConfirm: () =>{
                //se almacenan todos los datos en un array en comun
                const valores = [];
                //se toman todos los valores ingresados
                const inputs = document.querySelectorAll('#valor');

                for(let i = 0; i < inputs.length; i++){
                    valores.push(inputs[i].value);
                }
                    //aqui se separan en arrays individuales
                const negativos = [];
                const positivos = [];
                const multiplos = [];
                const pares = [];
                
                //contando los elementos del array
                const vNegativos = negativos.length;
                const vPositivos = positivos.length;
                const vMultiplos = multiplos.length;
                const vPares = pares.length;

                //voy a acumular todos los datos en un array como metodo desesperado
                const array = [vNegativos, vPositivos,vMultiplos, vPares];

                //iterando el array de valores
                valores.forEach(Element => {
                    if(Element < 0){
                        negativos.push(Element);
                    }else if(Element % 2 === 0 && Element > 0){
                        pares.push(Element);
                        positivos.push(Element);
                    }else if(Element % 15 === 0 && Element > 0){
                        multiplos.push(Element);
                        positivos.push(Element);
                    }else if(Element > 0){
                        positivos.push(Element);
                    }
                })
            },
        }).then((array) => {
            if(array.isConfirmed){
                const arrayC = array.value;
                //contando los datos de cada arra
                Swal.fire({
                    title: 'valores',
                    html: '<p><strong>La cantidad de valores negativos ingresados es: </strong> ' + arrayC[0] + '</p>' +
                    '<p><strong>La cantidad de valores positivos ingresados es: </strong> ' + arrayC[1] + '</p>' +
                    '<p><strong>La cantidad de valores multiplos de 15 ingresados es: </strong> ' + arrayC[2] + '</p>' +
                    '<p><strong>El valor acumulado de los números ingresados que son pares es: </strong>'+ arrayC[3] + '</p>',
                    confirmButtonText: 'ok',
                    showCancelButton: true
                })
            }
        })
}*/


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

    /*EJERCICIO 12: 
    Se cuenta con la siguiente información: 
    •	Las edades de 5 estudiantes del turno mañana. 
    •	Las edades de 6 estudiantes del turno tarde. 
    •	Las edades de 11 estudiantes del turno noche. 
    Nota: Las edades de cada estudiante se deberán ingresar por la web. 
    
    
    Lo que queremos devolver:
    •	Obtener el promedio de las edades de cada turno (tres promedios).
    •	Imprimir dichos promedios (promedio de cada turno).
    •	Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un promedio de edades mayor*/
    
    
    function ingresarEdades() {
          Swal.fire({
            title: "Registro de Edades",
            html: `
              <h2>Turno Mañana</h2>
              <input type="number" id="manana1" placeholder="Estudiante 1">
              <input type="number" id="manana2" placeholder="Estudiante 2">
              <input type="number" id="manana3" placeholder="Estudiante 3">
              <input type="number" id="manana4" placeholder="Estudiante 4">
              <input type="number" id="manana5" placeholder="Estudiante 5">
    
              <h2>Turno Tarde</h2>
              <input type="number" id="tarde1" placeholder="Estudiante 1">
              <input type="number" id="tarde2" placeholder="Estudiante 2">
              <input type="number" id="tarde3" placeholder="Estudiante 3">
              <input type="number" id="tarde4" placeholder="Estudiante 4">
              <input type="number" id="tarde5" placeholder="Estudiante 5">
              <input type="number" id="tarde6" placeholder="Estudiante 6">
    
              <h2>Turno Noche</h2>
              <input type="number" id="noche1" placeholder="Estudiante 1">
              <input type="number" id="noche2" placeholder="Estudiante 2">
              <input type="number" id="noche3" placeholder="Estudiante 3">
              <input type="number" id="noche4" placeholder="Estudiante 4">
              <input type="number" id="noche5" placeholder="Estudiante 5">
              <input type="number" id="noche6" placeholder="Estudiante 6">
              <input type="number" id="noche7" placeholder="Estudiante 7">
              <input type="number" id="noche8" placeholder="Estudiante 8">
              <input type="number" id="noche9" placeholder="Estudiante 9">
              <input type="number" id="noche10" placeholder="Estudiante 10">
              <input type="number" id="noche11" placeholder="Estudiante 11">
            `,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Mostrar Edades",
            focusConfirm: false,
            preConfirm: () => {
              const manana1 = document.getElementById('manana1').value;
              const manana2 = document.getElementById('manana2').value;
              const manana3 = document.getElementById('manana3').value;
              const manana4 = document.getElementById('manana4').value;
              const manana5 = document.getElementById('manana5').value;
    
              const tarde1 = document.getElementById('tarde1').value;
              const tarde2 = document.getElementById('tarde2').value;
              const tarde3 = document.getElementById('tarde3').value;
              const tarde4 = document.getElementById('tarde4').value;
              const tarde5 = document.getElementById('tarde5').value;
              const tarde6 = document.getElementById('tarde6').value;
    
              const noche1 = document.getElementById('noche1').value;
              const noche2 = document.getElementById('noche2').value;
              const noche3 = document.getElementById('noche3').value;
              const noche4 = document.getElementById('noche4').value;
              const noche5 = document.getElementById('noche5').value;
              const noche6 = document.getElementById('noche6').value;
              const noche7 = document.getElementById('noche7').value;
              const noche8 = document.getElementById('noche8').value;
              const noche9 = document.getElementById('noche9').value;
              const noche10 = document.getElementById('noche10').value;
              const noche11 = document.getElementById('noche11').value;
    
              const resultado = `
                <h2>Edades de Estudiantes</h2>
                <h3>Turno Mañana</h3>
                <p>Estudiante 1: ${manana1} años</p>
                <p>Estudiante 2: ${manana2} años</p>
                <p>Estudiante 3: ${manana3} años</p>
                <p>Estudiante 4: ${manana4} años</p>
                <p>Estudiante 5: ${manana5} años</p>
    
                <h3>Turno Tarde</h3>
                <p>Estudiante 1: ${tarde1} años</p>
                <p>Estudiante 2: ${tarde2} años</p>
                <p>Estudiante 3: ${tarde3} años</p>
                <p>Estudiante 4: ${tarde4} años</p>
                <p>Estudiante 5: ${tarde5} años</p>
                <p>Estudiante 6: ${tarde6} años</p>
    
                <h3>Turno Noche</h3>
                <p>Estudiante 1: ${noche1} años</p>
                <p>Estudiante 2: ${noche2} años</p>
                <p>Estudiante 3: ${noche3} años</p>
                <p>Estudiante 4: ${noche4} años</p>
                <p>Estudiante 5: ${noche5} años</p>
                <p>Estudiante 6: ${noche6} años</p>
                <p>Estudiante 7: ${noche7} años</p>
                <p>Estudiante 8: ${noche8} años</p>
                <p>Estudiante 9: ${noche9} años</p>
                <p>Estudiante 10: ${noche10} años</p>
                <p>Estudiante 11: ${noche11} años</p>
              `;
    
              Swal.fire({
                title: "Edades de Estudiantes",
                html: resultado,
                icon: "info"
              });
            },
          });
        }








