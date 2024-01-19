//Scroll Bar Indicator

function SCROLLBAR(){
  const scrollIndicator= document.querySelector(".scrollBar");

const totalScrollheight = document.body.scrollHeight - window.innerHeight;

function scrollbars(){
  const scrollPercentage = (window.scrollY /totalScrollheight)*100;
  scrollIndicator.style.width= scrollPercentage +"%";
}
window.addEventListener("scroll",scrollbars);
}
SCROLLBAR();

// Responsuve Navbar

const linksDiv = document.querySelector(".nav-links");
const menu = document.querySelector("i");

var flag = true;
menu.addEventListener("click",()=>{
    if(flag){
        linksDiv.style.left= "0%";
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
       
    }else{
        linksDiv.style.left = "-100%";
        menu.classList.add("fa-bars");
        menu.classList.remove("fa-xmark");
    }
    flag = !flag;
})

// MOuseFollower

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

// gsap
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()
tl.from("nav",{
  y:-100,
  opacity:0,
  duration:1,
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

window.onload = function() {
  // Set the scroll position to the top of the page
  window.scrollTo(0, 0);
};