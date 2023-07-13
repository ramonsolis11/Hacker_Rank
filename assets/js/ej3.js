/**
EJERCICIO 3: 
CATEGORIA	AUMENTO
A	        15%
B	        30%
C	        10%
D	        20%

Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. 
Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. 
Deberá demostrar en html los datos del empleado y el aumento salarial.*/

function calcularAumentoSalario(categoria, salario) {
    
        switch (categoria) {
        case "A":
            nuevoSalario = salario + (salario*0.15);
            break;
        case "B":
            nuevoSalario = salario + (salario*0.30);
            break;
        case "C":
            nuevoSalario = salario + (salario*0.10);
            break;
        case "D":
            nuevoSalario = salario + (salario*0.20);
            break;
        default:
            nuevoSalario = 0;
        }
    

    
        return { nuevoSalario };
    }
    
    function mostrarDatosEmpleado(nombre, salario, categoria, nuevoSalario ) {
        const contenidoHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Salario: $${salario}</p>
        <p>Categoría: ${categoria}</p>
        <p>Salario con Aumento: $${nuevoSalario}</p>
        `;
    
        swal.fire({
        title: "Datos del Empleado",
        html: contenidoHTML,
        icon: "info"
        });
    }
    
    function DatosEmpleado() {
        swal.fire({
        title: "Ingresar Datos del Empleado",
        html:
            '<input id="input-nombre" class="swal2-input" placeholder="Nombre">' +
            '<input id="input-salario" class="swal2-input" placeholder="Salario">' +
            '<input id="input-categoria" class="swal2-input" placeholder="Categoría">',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = document.getElementById('input-nombre').value;
            const salario = parseFloat(document.getElementById('input-salario').value);
            const categoria = document.getElementById('input-categoria').value.toUpperCase();
    
            const { nuevoSalario } = calcularAumentoSalario(categoria, salario);
            mostrarDatosEmpleado(nombre, salario, categoria, nuevoSalario);
    
            const resultadoHTML = `
            <p>Nombre: ${nombre}</p>
            <p>Salario: $${salario}</p>
            <p>Categoría: ${categoria}</p>
            <p>Salario con Aumento: $${nuevoSalario}</p>
            `;
    
            document.getElementById('resultado').innerHTML = resultadoHTML;
        }
        });
    }