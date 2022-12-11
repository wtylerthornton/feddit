let postForm = document.querySelector("#postForm");
let link = document.querySelector("#link");
let trendingPosts = document.querySelector("#trending");


postForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let newPost = document.createElement("div");
    newPost.classList.add('post');
    newPost.innerHTML = `<img src='${link.value}'>`;
    link.value = "";
    trendingPosts.appendChild(newPost);
});

let users = {
    "tyler": "thornton"
}

let username;
let password;

function login(e) {
    e.preventDefault();
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    if (username in users) {
        if (password == users[username]) {
            sessionStorage.setItem("username", username);
            location.reload();
        }
        else {
            window.alert("Incorrect password.");
        }
    }
    else {
        window.alert("Username not found.");
    }
}

function logout() {
    sessionStorage.clear();
    location.reload();
}

let logoutButton = document.querySelector("#logoutButton");
logoutButton.addEventListener("click", logout);

let userInfo = document.querySelector("#userInfo");
let loginForm = document.querySelector("#loginForm");
if (sessionStorage.getItem("username") != null) {
    userInfo.append(`Welcome, ${sessionStorage.getItem("username")}`);
    userInfo.classList.toggle("hidden");
    loginForm.classList.toggle("hidden");
}

loginForm.addEventListener("submit", login);