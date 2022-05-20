// TOGGLE LOGIN BUTTON
let loggedIn = false;
function toggleLogin(element) {
    if (!loggedIn){
        element.textContent = "Logout";
        alert("Login successful. Welcome back!");
        loggedIn = true;
    }
    else {
        element.textContent = "Login";
        alert("You are now logged out. Come back soon!");
        loggedIn = false;
    }
}