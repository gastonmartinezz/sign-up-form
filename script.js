const password1 = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

const match = document.querySelector(".match");

function checkPassword() {
    if (password1.value !== password2.value) {
        password1.classList.add("input-error");
        password2.classList.add("input-error");

        match.textContent = "*Password do not match!";
    } else {
        password1.classList.remove("input-error");
        password2.classList.remove("input-error");

        match.textContent = "";
    }
}

password1.addEventListener("input", checkPassword);
password2.addEventListener("input", checkPassword);