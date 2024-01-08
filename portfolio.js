const scrollIndicator= document.querySelector(".scrollBar");

const totalScrollheight = document.body.scrollHeight - window.innerHeight;

function scrollbars(){
  const scrollPercentage = (window.scrollY /totalScrollheight)*100;
  scrollIndicator.style.width= scrollPercentage +"%";
}
window.addEventListener("scroll",scrollbars);

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
function MouseFollower(){
  const cursor = document.querySelector(".cursor");
const body = document.querySelector("#main");
const logo = document.querySelector(".logo")

body.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y
  })
})

}
MouseFollower();




gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()
tl.from("nav",{
  y:-100,
  opacity:0,
  duration:1,
  stagger:0
})
tl.from(".Anime1",{
  x:-100,
  opacity:0,
  duration:1
})
tl.from(".Anime2",{
  opacity:0,
  scale:0.5,
})
