document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    emailjs.init({
        publicKey: '3m0qi39dtPVI2kydi'
    });

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        emailjs.sendForm('service_dynw9un', 'template_0vjaplg', this)
            .then(function () {
                alert('Message successfully sent to your email!');
                contactForm.reset();
            })
            .catch(function (error) {
                console.error('Email send failed:', error);
                alert('Failed to send message. Please check your EmailJS configuration.');
            });
    });
});
