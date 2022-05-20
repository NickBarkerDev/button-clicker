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

// INCREMENT LIKE COUNT WHEN LIKE BUTTONS ARE CLICKED
function incrementLikes(){
    const likeBtn1 = document.getElementById("like-btn-1");
    const likeBtn2 = document.getElementById("like-btn-2");

    const numLikes1 = document.getElementById("likes-1");
    const numLikes2 = document.getElementById("likes-2");

    likeBtn1.addEventListener("click", function(){
        numLikes1.innerHTML++;
        alert("Ninja has been liked! Like count has been incremented.")
    })

    likeBtn2.addEventListener("click", function(){
        numLikes2.innerHTML++;
        alert("Ninja has been liked! Like count has been incremented.")
    })
}

incrementLikes();