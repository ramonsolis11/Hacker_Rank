/*EJERCICIO 5:*/

function obtenerDescuento() {
    Swal.fire({
        title: '<i class="fas fa-car"></i> Selección de coche',
        html:
            '<select class="form-control col-12" id="coche">' +
                '<option value="FORD FIESTA">FORD FIESTA</option>' +
                '<option value="FORD FOCUS">FORD FOCUS</option>' +
                '<option value="FORD ESCAPE">FORD ESCAPE</option>' +
            '</select>',
        showCancelButton: true,
        confirmButtonText: "Continuar",
        preConfirm: () => {
            const cocheSeleccionado = document.getElementById('coche').value;
            let descuento = 0;

            if (cocheSeleccionado === "FORD FIESTA") {
                descuento = 5;
            } else if (cocheSeleccionado === "FORD FOCUS") {
                descuento = 10;
            } else if (cocheSeleccionado === "FORD ESCAPE") {
                descuento = 20;
            }

            return { coche: cocheSeleccionado, descuento: descuento };
        },
    }).then((result) => {
        if (result.isConfirmed) {
            const cocheSeleccionado = result.value.coche;
            const descuento = result.value.descuento;

            Swal.fire({
                title: ' Resultado',
                html:
                    '<p><i class="fas fa-car"></i> <strong>Coche seleccionado:</strong> ' + cocheSeleccionado + '</p>' +
                    '<p><i class="fas fa-percentage"></i> <strong>Descuento aplicado:</strong> ' + descuento + '%</p>',
                confirmButtonText: 'OK',
                showCancelButton: true,
            });
        }
    });
}

/*EJERCICIO 6 */

function Viajes() {
    Swal.fire({
      title: '<i class="fas fa-globe-americas fa-2x"></i> Viajes Turísticos',
      html: `
        <form onsubmit="return calcularDescuento()">
          <p><div class="form-group">
            <label for="origen" class="form-label">Origen:</label>
            <select id="origen" class="form-input">
              <option value="Palma">Palma</option>
              <option value="Otro origen">Otro origen</option>
            </select>
          </div></p>
  
          <div class="form-group">
         <p><label for="destino" class="form-label">Destino:</label>
            <select id="destino" class="form-input">
              <option value="La costa del Sol">La costa del Sol</option>
              <option value="Panchimalco">Panchimalco</option>
              <option value="Puerto el Triunfo">Puerto el Triunfo</option>
              <option value="Otro destino">Otro destino</option>
            </select>
          </div></p>
  
         <p><button type="submit" class="submit-button"><i class="fas fa-calculator fa-lg"></i></button>
        </form></p>
      `,
      showConfirmButton: false,
      customClass: {
        confirmButton: 'swal2-styled swal2-confirm-button',
        icon: 'swal2-icon'
      }
    });
  }
  
  function calcularDescuento() {
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
  
    var descuento = 0;
  
    if (origen === 'Palma' && destino === 'La costa del Sol') {
      descuento = 5;
    } else if (destino === 'Panchimalco') {
      descuento = 10;
    } else if (destino === 'Puerto el Triunfo') {
      descuento = 15;
    }
  
    // Mostrar el resultado en HTML utilizando SweetAlert
    Swal.fire({
      title: 'Descuento en Viaje Turístico',
      html: '<p>Origen: ' + origen + '</p>' +
        '<p>Destino: ' + destino + '</p>' +
        '<p>Descuento aplicado: ' + descuento + '%</p>',
      icon: 'info',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'swal2-styled swal2-confirm-button',
        icon: 'swal2-icon'
      }
    });
    return false; // Evitar que el formulario se envíe
  }
  
/*EJERCIOCIO 7*/
function mostrarCalculadora() {
  Swal.fire({
      title: "Ingresar Notas y Ponderaciones",
      html:
          '<input id="swal-input-nota1" class="swal2-input" placeholder="Nota 1">' +
          '<input id="swal-input-ponderacion1" class="swal2-input" placeholder="Ponderación 1 (%)">' +
          '<input id="swal-input-nota2" class="swal2-input" placeholder="Nota 2">' +
          '<input id="swal-input-ponderacion2" class="swal2-input" placeholder="Ponderación 2 (%)">',
      focusConfirm: false,
      preConfirm: () => {
          const nota1 = parseFloat(document.getElementById("swal-input-nota1").value);
          const ponderacion1 = parseFloat(document.getElementById("swal-input-ponderacion1").value);
          const nota2 = parseFloat(document.getElementById("swal-input-nota2").value);
          const ponderacion2 = parseFloat(document.getElementById("swal-input-ponderacion2").value);

          const mediaPonderada = (nota1 * (ponderacion1 / 100)) + (nota2 * (ponderacion2 / 100));

          Swal.fire({
          title: "Nota Media Ponderada",
          text: `La nota media ponderada es: ${mediaPonderada.toFixed(2)}`,
          icon: "info"
          });
      }
  });
}

  /*ejercicio 8*/
    function Formulario() {
      swal.fire({
        title: "Formulario",
        html: `<input type="text" id="nombre" placeholder="Nombre" class="swal2-input">
              <input type="email" id="email" placeholder="Email" class="swal2-input">
              <textarea id="mensaje" placeholder="Mensaje" class="swal2-textarea"></textarea>`,
        showCancelButton: true,
        confirmButtonText: "Enviar",
        cancelButtonText: "Cancelar",
        focusConfirm: false,
        preConfirm: () => {
          const nombre = document.getElementById('nombre').value;
          const email = document.getElementById('email').value;
          const mensaje = document.getElementById('mensaje').value;
    
          if (nombre === '' || email === '' || mensaje === '') {
            return swal.showValidationMessage("Por favor, complete todos los campos del formulario");
          }
    
          return { nombre: nombre, email: email, mensaje: mensaje };
        }
      }).then(result => {
        if (result.isConfirmed) {
          const { nombre, email, mensaje } = result.value;
          const mensajeAlerta = 'Nombre: ' + nombre + '\nEmail: ' + email + '\nMensaje: ' + mensaje;
          swal.fire('Datos ingresados', mensajeAlerta, 'success');
        }
      });
    }
  

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
          <form id="edadesForm">
            <h3>Turno Mañana</h3>
            <input type="number" id="manana1" placeholder="Edad Estudiante 1">
            <input type="number" id="manana2" placeholder="Edad Estudiante 2">
            <input type="number" id="manana3" placeholder="Edad Estudiante 3">
            <input type="number" id="manana4" placeholder="Edad Estudiante 4">
            <input type="number" id="manana5" placeholder="Edad Estudiante 5">
    
            <h3>Turno Tarde</h3>
            <input type="number" id="tarde1" placeholder="Edad Estudiante 1">
            <input type="number" id="tarde2" placeholder="Edad Estudiante 2">
            <input type="number" id="tarde3" placeholder="Edad Estudiante 3">
            <input type="number" id="tarde4" placeholder="Edad Estudiante 4">
            <input type="number" id="tarde5" placeholder="Edad Estudiante 5">
            <input type="number" id="tarde6" placeholder="Edad Estudiante 6">
    
            <h3>Turno Noche</h3>
            <input type="number" id="noche1" placeholder="Edad Estudiante 1">
            <input type="number" id="noche2" placeholder="Edad Estudiante 2">
            <input type="number" id="noche3" placeholder="Edad Estudiante 3">
            <input type="number" id="noche4" placeholder="Edad Estudiante 4">
            <input type="number" id="noche5" placeholder="Edad Estudiante 5">
            <input type="number" id="noche6" placeholder="Edad Estudiante 6">
            <input type="number" id="noche7" placeholder="Edad Estudiante 7">
            <input type="number" id="noche8" placeholder="Edad Estudiante 8">
            <input type="number" id="noche9" placeholder="Edad Estudiante 9">
            <input type="number" id="noche10" placeholder="Edad Estudiante 10">
            <input type="number" id="noche11" placeholder="Edad Estudiante 11">
          </form>
        `,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Mostrar Edades",
        focusConfirm: false,
        preConfirm: () => {
          // Obtener las edades de los estudiantes de cada turno
          const mananaEdades = [];
          const tardeEdades = [];
          const nocheEdades = [];
    
          for (let i = 1; i <= 5; i++) {
            mananaEdades.push(parseInt(document.getElementById(`manana${i}`).value));
          }
    
          for (let i = 1; i <= 6; i++) {
            tardeEdades.push(parseInt(document.getElementById(`tarde${i}`).value));
          }
    
          for (let i = 1; i <= 11; i++) {
            nocheEdades.push(parseInt(document.getElementById(`noche${i}`).value));
          }
    
          // Calcular los promedios de cada turno
          const promedioManana = mananaEdades.reduce((sum, edad) => sum + edad, 0) / 5;
          const promedioTarde = tardeEdades.reduce((sum, edad) => sum + edad, 0) / 6;
          const promedioNoche = nocheEdades.reduce((sum, edad) => sum + edad, 0) / 11;
    
          // Encontrar el turno con el mayor promedio
          let turnoMayor = "";
          let mayorPromedio = 0;
    
          if (promedioManana > mayorPromedio) {
            turnoMayor = "Mañana";
            mayorPromedio = promedioManana;
          }
    
          if (promedioTarde > mayorPromedio) {
            turnoMayor = "Tarde";
            mayorPromedio = promedioTarde;
          }
    
          if (promedioNoche > mayorPromedio) {
            turnoMayor = "Noche";
            mayorPromedio = promedioNoche;
          }
    
          // Mostrar el resultado
          const resultado = `
            <h2>Edades de Estudiantes</h2>
            <h3>Turno Mañana</h3>
            ${mananaEdades.map((edad, i) => `<p>Estudiante ${i + 1}: ${edad} años</p>`).join("")}
    
            <h3>Turno Tarde</h3>
            ${tardeEdades.map((edad, i) => `<p>Estudiante ${i + 1}: ${edad} años</p>`).join("")}
    
            <h3>Turno Noche</h3>
            ${nocheEdades.map((edad, i) => `<p>Estudiante ${i + 1}: ${edad} años</p>`).join("")}
    
            <h2>Promedio de Edades por Turno</h2>
            <p>Mañana: ${promedioManana.toFixed(2)} años</p>
            <p>Tarde: ${promedioTarde.toFixed(2)} años</p>
            <p>Noche: ${promedioNoche.toFixed(2)} años</p>
            <h2>Turno con Mayor Promedio</h2>
            <p>${turnoMayor} tiene el mayor promedio de edades (${mayorPromedio.toFixed(2)} años)</p>
          `;
    
          Swal.fire({
            title: "Edades de Estudiantes y Promedio de Turnos",
            html: resultado,
            icon: "info",
          });
        },
  });
}








