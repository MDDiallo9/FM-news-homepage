const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector("ul")

navToggle.addEventListener("click",(e) => {
    let visibility = nav.getAttribute("data-visible")
    if (visibility === "false"){
        nav.setAttribute("data-visible",true)
        navToggle.classList.toggle("close")
    }else {
        nav.setAttribute("data-visible",false)
        navToggle.classList.toggle("close")
    }
})