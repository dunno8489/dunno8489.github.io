const status = document.getElementById("status");

function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    if (localStorage.getItem(username)) {
      status.textContent = "User already exists!";
    } else {
      localStorage.setItem(username, password);
      status.textContent = "Registered successfully!";
    }
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const storedPass = localStorage.getItem(username);
    if (storedPass === password) {
      status.textContent = "Login successful!";
    } else {
      status.textContent = "Login failed!";
    }
}