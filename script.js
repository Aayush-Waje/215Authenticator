const checkLogin = (userId, password) => {
    let message = "";
    if (userId === "admin" && password === "secret") {
        message = "Welcome Admin!";
    }
    else {
        message = "BAD LOGIN CREDENTIALS";
    }
    console.log(message);
    document.querySelector(".output").innerHTML = message;
};
const startLogin = () => {
    const userId = prompt("Enter Username (Case Sensitive):");
    const password = prompt("Enter Password (Case Sensitive):");
    checkLogin(userId, password);
};
