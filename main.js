document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("nav ul li a");

    navItems.forEach(item => {
        item.addEventListener("click", function(event) {
            event.preventDefault();

            const targetSectionId = item.getAttribute("href");

            document.querySelector(targetSectionId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = contactForm.querySelector("[name='name']").value;
        const email = contactForm.querySelector("[name='email']").value;
        const message = contactForm.querySelector("[name='message']").value;

        // Tutaj możesz dodać kod do przetwarzania formularza (np. wysłanie danych do serwera)
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        contactForm.reset();
    });
});
