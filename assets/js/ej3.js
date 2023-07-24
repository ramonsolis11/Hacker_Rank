/**EJERCICIO 3: 
CATEGORIA	AUMENTO
A	15%
B	30%
C	10%
D	20%

Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: Nombre, Salario, categoría y aumento. Deberá demostrar en html los datos del empleado y el aumento salarial.*/

function calcularAumentoSalario(categoria, salario) {
        let aumentoPorcentaje;
    
        switch (categoria) {
        case "A":
            aumentoPorcentaje = 0.15;
            break;
        case "B":
            aumentoPorcentaje = 0.3;
            break;
        case "C":
            aumentoPorcentaje = 0.1;
            break;
        case "D":
            aumentoPorcentaje = 0.2;
            break;
        default:
            aumentoPorcentaje = 0;
        }
    
        const aumento = salario * aumentoPorcentaje;
        const nuevoSalario = salario + aumento;
    
        return { aumento, nuevoSalario };
    }
    
    function mostrarDatosEmpleado(nombre, salario, categoria, aumento) {
        const contenidoHTML = `
        <p>Nombre: ${nombre}</p>
        <p>Salario: $${salario}</p>
        <p>Categoría: ${categoria}</p>
        <p>Aumento: $${aumento}</p>
        `;
    
        swal.fire({
        title: "Datos del Empleado",
        html: contenidoHTML,
        icon: "info"
        });
    }
    
    function obtenerDatosEmpleado() {
        const categoriasValidas = ["A", "B", "C", "D"];
    
        swal.fire({
        title: "Ingresar Datos del Empleado",
        html:
            '<input id="swal-input-nombre" class="swal2-input" placeholder="Nombre">' +
            '<input id="swal-input-salario" class="swal2-input" placeholder="Salario">' +
            '<select id="swal-input-categoria" class="swal2-input">' +
            '<option value="">Seleccione una categoría</option>' +
            '<option value="A">A</option>' +
            '<option value="B">B</option>' +
            '<option value="C">C</option>' +
            '<option value="D">D</option>' +
            '</select>',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = document.getElementById('swal-input-nombre').value;
            const salario = parseFloat(document.getElementById('swal-input-salario').value);
            const categoria = document.getElementById('swal-input-categoria').value.toUpperCase();
    
            if (!categoriasValidas.includes(categoria)) {
            swal.showValidationMessage('Por favor, seleccione una categoría válida.');
            return false;
            }
    
            const { aumento, nuevoSalario } = calcularAumentoSalario(categoria, salario);
            mostrarDatosEmpleado(nombre, salario, categoria, aumento);
    
            const resultadoHTML = `
            <p>Nombre: ${nombre}</p>
            <p>Salario: $${salario}</p>
            <p>Categoría: ${categoria}</p>
            <p>Aumento: $${aumento}</p>
            <p>Salario con Aumento: $${nuevoSalario}</p>
            `;
    
            document.getElementById('resultado').innerHTML = resultadoHTML;
        }
        });
}
