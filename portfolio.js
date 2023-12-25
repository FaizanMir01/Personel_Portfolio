
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");
const logo = document.querySelector(".logo")

body.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y
  })
})

let tl = gsap.timeline();
tl.from("#desktop-nav",{
  opacity:0,
  y:-50,
  duration:1,
})


