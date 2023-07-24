/**
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, 
calcular cual número es el mayor y devolverlo. */

function encontrarNumeroMayor(num1, num2) {
    let mayor;
    
        if (num1 > num2) {
        mayor = num1;
        } else if (num2 > num1) {
        mayor = num2;
        } else {
        mayor = "Los números son iguales";
        }
    
        return mayor;
    }
    
    function obtenerNumeros() {
        swal.fire({
        title: "Ingresar Números",
        html:
            '<input id="swal-input-num1" class="swal2-input" placeholder="Número 1">' +
            '<input id="swal-input-num2" class="swal2-input" placeholder="Número 2">',
        focusConfirm: false,
        preConfirm: () => {
            const num1 = parseInt(document.getElementById('swal-input-num1').value);
            const num2 = parseInt(document.getElementById('swal-input-num2').value);
    
            const mayor = encontrarNumeroMayor(num1, num2);
    
            swal.fire({
            title: "Número Mayor",
            text: mayor,
            icon: "info"
            });
        }
    });
}