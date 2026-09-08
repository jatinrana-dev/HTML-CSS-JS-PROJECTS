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



const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__socials li", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 500,
});