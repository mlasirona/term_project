var timeout = null;

let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let confirmInput = document.getElementById("password_confirm");

usernameInput.addEventListener('keyup', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() { validateUsername() }, 2000);
});

passwordInput.addEventListener('keyup', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() { validatePassword() }, 2000);
});

confirmInput.addEventListener('keyup', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() { validateConfirm() }, 2000);
});

function validate() {
    var alphanum = /^[a-zA-Z0-9]/;

    var usernameBool = true;
    var passwordBool = true;

    if (("a" > username[0] || username[0] > "z") && ("A" > username[0] || username[0] > "Z")) {
        usernameBool = false;
    }
    if (username.length < 3 || !alphanum.test(username)) {
        usernameBool = false;
    }

    var num = /[0-9]/;
    var uppercase = /[A-Z]/;
    var special = /[/*-+!@#$^&*]/;

    if (password.length < 8) {
        passwordBool = false;
    }
    if (!num.test(password)) {
        passwordBool = false;
    }
    if (!uppercase.test(password)) {
        passwordBool = false;
    }
    if (!special.test(password)) {
        passwordBool = false;
    }
    if (password != passwordConfirm) {
        passwordBool = false;
    }

    if (usernameBool && passwordBool) {
        alert("Successfully Registered.")
        document.getElementById("registration").submit();
    }
}

function validateUsername() {
    var username = document.getElementById("username").value;
    var alphanum = /^[a-zA-Z0-9]/;

    if (("a" > username[0] || username[0] > "z") && ("A" > username[0] || username[0] > "Z")) {
        alert("Username must start with a-z or A-Z.");
    } else if (username.length < 3 || !alphanum.test(username)) {
        alert("Username must be 3 or more alphanumeric characters.");
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var num = /[0-9]/;
    var uppercase = /[A-Z]/;
    var special = /[/*-+!@#$^&*]/;

    if (password.length < 8) {
        alert("Password must be 8 or more characters.");
    } else if (!num.test(password)) {
        alert("Password must contain at least one number.");
    } else if (!uppercase.test(password)) {
        alert("Password must contain at least one uppercase letter.");
    } else if (!special.test(password)) {
        alert("Password must contain one special character. (/*-+!@#$^&*)");
    }
}

function validateConfirm() {
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("password_confirm").value;

    if (password != passwordConfirm) {
        alert("Passwords must be the same.");
    }
}