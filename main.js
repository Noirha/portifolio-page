let moon = document.getElementById("moon");
let span = document.getElementsByTagName("span")[1]
let a = document.getElementsByTagName("a")[0]
moon.addEventListener("click", (eo) => {

    eo.target.parentElement.classList.toggle("pp");

    if (eo.target.parentElement.classList.contains("pp")) {

        eo.target.parentElement.parentElement.getElementsByClassName("drop")[0].style.backgroundColor = "black"
        eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "black";
        eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.color = "white";
        eo.target.parentElement.innerHTML = `<li class="fa-solid fa-sun"></li>`
        eo.target.style.transition = "all 0.2s";
        a.style.color = "white";

    } else {
        eo.target.parentElement.parentElement.getElementsByClassName("drop")[0].style.backgroundColor = "white"
        eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "white"
        eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.color = "black";
        eo.target.parentElement.innerHTML = `<li class="fa-solid fa-moon"></li>`
        a.style.color = "black";

    }

})

let li = document.querySelectorAll("#h")

li.forEach(item => {
    item.addEventListener("click", (eo) => {
        eo.target.parentElement.classList.toggle("active");

        if (eo.target.parentElement.classList.contains("active")) {


            eo.target.parentElement.parentElement.getElementsByClassName("drop")[0].style.display = "block"
            eo.target.parentElement.innerHTML = `<li class="fa-solid fa-close"></li>`

        } else {
            eo.target.parentElement.parentElement.getElementsByClassName("drop")[0].style.display = "none"
            eo.target.parentElement.innerHTML = `<li class="fa-solid fa-list"></li>`

        }
    })
})

let ley = document.querySelectorAll("li")

ley.forEach((item, index) => {
    item.addEventListener("mouseenter", (eo) => {
        eo.target.parentElement.getElementsByClassName("active")[0].classList.remove("active")
        eo.target.classList.add("active")
    })
})

