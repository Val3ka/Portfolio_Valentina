
(function() {
    emailjs.init({
        publicKey: "service_y6t18ag",
    });
})();

window.onload = function() {
    // Gestione del form di contatto
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('portfolio_gmail', 'template_8h5ea5n', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });

    // Imposta hash se vuoto
    if (window.location.hash === '') {
        window.location.hash = '#home';  
    }
};



function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
    document.querySelector(".mobile-menu").classList.toggle("open");
}
