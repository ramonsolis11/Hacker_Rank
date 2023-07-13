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
        Iguales = "Los números son iguales";
        }
    
        return mayor;
    }
    
    function NumeroMayor() {
        swal.fire({
        title: "Ingresar Números",
        html:
            '<input id="swal-input-num1" class="swal2-input" placeholder="Número 1">' +
            '<input id="swal-input-num2" class="swal2-input" placeholder="Número 2">',
        focusConfirm: false,
        preConfirm: () => {
            const num1 = parseInt(document.querySelector('#swal-input-num1'));
            const num2 = parseInt(document.querySelector('#swal-input-num2'));
    
            const mayor = encontrarNumeroMayor(num1, num2);

    
            swal.fire({
            title: "El número mayor de los 2 ingresados",
            text: mayor,
            icon: "info"
            });
        }
        });
        }