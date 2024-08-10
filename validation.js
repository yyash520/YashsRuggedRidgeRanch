document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');
    var errorMessage = document.getElementById('errorMessage');

    var phonePattern = /^\d{10}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset error message visibility
    errorMessage.style.display = 'none';

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        event.preventDefault();
    } else if (!phonePattern.test(phone.value)) {
        alert('Please enter a valid 10-digit phone number.');
        phone.focus();
        event.preventDefault();
    } else if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        event.preventDefault();
    } else if (!comments.value.trim()) {
        alert('Please enter your comments or questions.');
        comments.focus();
        event.preventDefault();
    }
});