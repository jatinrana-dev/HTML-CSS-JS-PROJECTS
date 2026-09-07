const menuBTn = document.querySelector(".nav-menu-btn")
const navlinks = document.querySelector(".nav-links")
const menubtnicon = menuBTn.querySelector("i")

menuBTn.addEventListener("click" , () => {
    navlinks.classList.toggle("open")

    const isopen = navlinks.classList.contains("open");
    menubtnicon.setAttribute(
        "class",
        isopen ? "ri-close-line" : "ri-menu-4-line"
     )
 
})

navlinks.addEventListener("click", ()=> {
    

    navlinks.classList.remove("open")
    menubtnicon.setAttribute("class", "ri-menu-4-line")
}
)