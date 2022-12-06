let button = document.querySelector("#submit");
let link = document.querySelector("#link");
let trendingPosts = document.querySelector("#trending");
let newPost = document.createElement("div");

button.addEventListener("click", function () {
    newPost.classList.add('post');
    newPost.innerHTML = `<img src='${link.value}'>`;
    trendingPosts.appendChild(newPost);
});