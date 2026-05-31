function authenticate(userId, password) {
    if (userId == "admin" && password == "secret") {
        console.log("Welcome Admin!");
        document.querySelector(".output").innerHTML =
            "Welcome Admin!";
    }
    else {
        console.log("BAD LOGIN CREDENTIALS");
        document.querySelector(".output").innerHTML =
            "BAD LOGIN CREDENTIALS";
    }
}
function startLogin() {
    var userId = prompt("Enter Username (Case Sensitive)");
    var password = prompt("Enter Password (Case Sensitive)");
    authenticate(userId, password);
}