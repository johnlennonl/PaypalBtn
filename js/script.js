fetch('http://localhost:5000/config')
    .then(res => res.json())
    .then(data => {
        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${data.clientId}&currency=USD`;
        script.onload = () => loadPayPalButtons();
        document.body.appendChild(script);
    })
    .catch(error => console.error("Error cargando PayPal SDK:", error));

function loadPayPalButtons() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '160.50'
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                Swal.fire({
                    icon: 'success',
                    title: 'Pago completado',
                    text: `¡Gracias, ${details.payer.name.given_name}! Tu pago se ha procesado correctamente.`,
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                });
            });
        },
        onError: function(err) {
            Swal.fire({
                icon: 'error',
                title: 'Error en el pago',
                text: 'Hubo un problema con tu transacción. Inténtalo de nuevo.',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Cerrar'
            });
        }
    }).render('#paypal-button-container');
}



// Selección de tallas
document.addEventListener("DOMContentLoaded", function() {
    const sizeButtons = document.querySelectorAll(".size-btn");

    sizeButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remover clase 'active' de todos los botones
            sizeButtons.forEach(btn => btn.classList.remove("active"));
            // Agregar clase 'active' solo al botón seleccionado
            this.classList.add("active");
        });
    });
});
