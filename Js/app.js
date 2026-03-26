const sections = document.querySelectorAll('.fade-section');
if (sections.length > 0){
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});
}

// contact form validation

const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let msgError = document.getElementById("msgError");

    function resetField(input, error) {
        input.classList.remove("input-error", "input-success");
        error.innerText = "";
    }

    resetField(name, nameError);
    resetField(email, emailError);
    resetField(phone, phoneError);
    resetField(message, msgError);

    if (name.value.trim() === "") {
        nameError.innerText = "❌ Name is required";
        name.classList.add("input-error");
        valid = false;
    } else {
        name.classList.add("input-success");
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        emailError.innerText = "Enter a valid email";
        email.classList.add("input-error");
        valid = false;
    } else {
        email.classList.add("input-success");
    }

    if (!/^[0-9]{11}$/.test(phone.value)) {
        phoneError.innerText = "Phone must be 11 digits";
        phone.classList.add("input-error");
        valid = false;
    } else {
        phone.classList.add("input-success");
    }

    if (message.value.trim() === "") {
        msgError.innerText = "Message cannot be empty";
        message.classList.add("input-error");
        valid = false;
    } else {
        message.classList.add("input-success");
    }

    let successMsg = document.getElementById("successMsg");

    if (valid) {
        successMsg.classList.remove("d-none");
        form.reset();

        document.querySelectorAll(".form-control").forEach(input => {
            input.classList.remove("input-success");
        });

        setTimeout(() => {
            successMsg.classList.add("d-none");
        }, 3000);
    }
});
}