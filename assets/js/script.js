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
    const addToCartIcons = document.querySelectorAll('.add-to-cart');

    addToCartIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            Swal.fire({
            title: 'Add to cart',
            text: '¿Do you want to add this product to the cart?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, add',
            cancelButtonText: 'Cancel'
            }).then((result) => {
            if (result.isConfirmed) {
                // Obtén el valor de la sección actual
                const section = icon.closest('section').id;
    
                // Redirige a la página correspondiente según la sección
                if (section === 'junior-section') {
                window.location.href = 'junior.html';
                } else if (section === 'senior-section') {
                window.location.href = 'senior.html';
                } else if (section === 'master-section') {
                window.location.href = 'master.html';
                }
            }
            });
        });
    });
