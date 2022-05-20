// TOGGLE LOGIN BUTTON
let loggedIn = false;
function toggleLogin(element) {
    if (!loggedIn){
        element.textContent = "Logout";
        loggedIn = true;
    }
    else {
        element.textContent = "Login";
        loggedIn = false;
    }
}


