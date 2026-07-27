document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email === "admin@gmail.com" && password === "admin123"){

        document.getElementById("message").innerHTML = "Login Successful!";
        document.getElementById("message").style.color = "green";

    }
    else{

        document.getElementById("message").innerHTML = "Invalid Email or Password!";
        document.getElementById("message").style.color = "red";

    }

});

console.log("User Login Jira Integration Testing");