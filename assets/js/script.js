// Inicializar el carrusel usando JavaScript y el DOM
    document.addEventListener("DOMContentLoaded", function() {
        var carousel = document.querySelector("#carouselExampleCaptions");
        var bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000, // Cambiar imagen cada 3 segundos
            ride: true, // Iniciar carrusel automáticamente
            pause: "hover" // Pausar el carrusel al pasar el cursor sobre él
        });
    });

    //TODO: SweetAlert2
// Obtener todos los elementos con la clase 'add-to-cart'
const addToCartButtons = document.getElementsByClassName('add-to-cart');

// Agregar un controlador de eventos a cada botón
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', redirectToSection);
}

// Controlador de eventos para redireccionar según la sección seleccionada
function redirectToSection() {
    const section = this.closest('.container').querySelector('h1').textContent.trim().toLowerCase();
    
    let pageUrl = '';

    if (section === 'junior') {
        pageUrl = 'junior.html';
    } else if (section === 'senior') {
        pageUrl = 'senior.html';
    } else if (section === 'master') {
        pageUrl = 'master.html';
    }

    if (pageUrl !== '') {
        Swal.fire({
            title: 'Product added to cart!',
            text: 'You will be redirected to the selected section.',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'OK',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = pageUrl;
            }
        });
    }
}
