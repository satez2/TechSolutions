/*
 * Arquivo: script.js
 * Funções JavaScript para o site TechSolutions
*/

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de como inicializar o carrossel (Embora o data-bs-ride="carousel" já faça isso no Bootstrap 5)
    var carouselElement = document.getElementById('carouselHeader');
    if (carouselElement) {
        var carousel = new bootstrap.Carousel(carouselElement, {
            interval: 5000, // Troca a cada 5 segundos
            wrap: true      // Permite loop
        });
    }

    // Exemplo de como adicionar um listener de evento ao formulário
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Este é apenas um placeholder. Para um envio real, você precisaria de um backend.
            event.preventDefault();
            
            const submitButton = document.getElementById('submitButton');
            submitButton.innerHTML = 'Enviando...';
            submitButton.disabled = true;

            // Simulação de envio (Timeout)
            setTimeout(() => {
                alert('Mensagem enviada com sucesso! A TechSolutions entrará em contato.');
                contactForm.reset();
                submitButton.innerHTML = 'Enviar Mensagem';
                submitButton.disabled = false;
            }, 1500);
        });
    }
});