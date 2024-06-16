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

function ResponsiveNavbar(){
  const linksDiv = document.querySelector(".mobile-links");
const menu = document.querySelector("i");

menu.addEventListener("click",()=>{
  linksDiv.classList.toggle("mobile-nav")
  menu.classList.toggle("fa-xmark")

})
}
ResponsiveNavbar();


//cursor

const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove",(dets)=>{
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y

  })
})

// gsap
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