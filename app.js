gsap.registerPlugin(ScrollTrigger);
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let hero = document.querySelectorAll(".overlay");
let Mbtn = document.querySelectorAll(".magnet");
let Bbtn = document.querySelectorAll(".blackButton")


const videoElement = document.createElement('video');
videoElement.autoplay = true;
videoElement.muted = true;
videoElement.loop = true;
videoElement.style.width = "100%";
videoElement.style.height = "100%";
videoElement.style.objectFit = "cover";
videoElement.style.position = "absolute";  
videoElement.style.top = "0";  
videoElement.style.left = "0";  
videoElement.style.zIndex = "1"; 


main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1
  });
});


// Below is the piece of code which is the problem
gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
    // markers:true,    // use this markes if you want
  },
  y: "-300%",
  ease: Power1,
});


hero.forEach((ele1) => {
  ele1.addEventListener("mouseenter", (e) => {
    let element = e.target.getAttribute("id");
    document.querySelector("#cursor").style.backgroundColor="transparent";
    if (element === "overlay1") {
      document.querySelector("#c1").style.color = "black";
      videoElement.src = "0.mp4"; 
    } else if (element === "overlay2") {
      document.querySelector("#c2").style.color = "black";
      videoElement.src = "2.mp4"; 

    } else {
      document.querySelector("#c3").style.color = "black";
      videoElement.src = "3.mp4"; 
    }
    cursor.appendChild(videoElement);
    gsap.to(cursor, {
      scale: 10
    });
  });
});

hero.forEach((ele2) => {
  ele2.addEventListener("mouseleave", (e) => {
    let element = e.target.getAttribute("id");
    document.querySelector("#cursor").style.backgroundColor="black";

    if (element === "overlay1") {
      document.querySelector("#c1").style.color = "transparent";
    } else if (element === "overlay2") {
      document.querySelector("#c2").style.color = "transparent";
    } else {
      document.querySelector("#c3").style.color = "transparent";
    }

    gsap.to(cursor, {
      scale: 1
    });
    while (cursor.firstChild) {
      cursor.removeChild(cursor.firstChild);
    }
    
  });
});


Mbtn.forEach((btn)=>{
  btn.addEventListener("mousemove",function(e){
    const position=btn.getBoundingClientRect();
    const x=e.pageX - position.left - position.width / 2;
    const y=e.pageY - position.top - position.height / 2;
    
    btn.style.transform=`translate(${x*0.3}px,${y*0.5}px)`;
  });
});

Mbtn.forEach((btn)=>{
  btn.addEventListener("mouseout",function(e){ 
    btn.style.transform="translate(0px, 0px)";
  });
});

Bbtn.forEach((ele)=>{
  ele.addEventListener("mouseenter",(e)=>{
    const val = e.target;
    val.style.backgroundColor="black";
    val.style.color="white";
    cursor.style.opacity = '0'; 


  })
})

Bbtn.forEach((ele)=>{
  ele.addEventListener("mouseout",(e)=>{
    const val = e.target;
    val.style.backgroundColor="white";
    val.style.color="black";
    cursor.style.opacity = '1'; 
    

  })
})



function typeEffect(element, speed) {
  let text = element.innerHTML;
  element.innerHTML = "";  
  let i = 0;

  let cursor = document.createElement('span');
  cursor.classList.add('typingCursor');
  element.appendChild(cursor);

  function type() {
    if (i < text.length) {
      cursor.insertAdjacentText('beforebegin', text.charAt(i)); 
      i++;
      setTimeout(type, speed);
    }
    
  }
  type();
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target.querySelector("p");
      typeEffect(element, 25);  
      observer.unobserve(entry.target);  
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const homeLast = document.getElementById('home-last');
  observer.observe(homeLast);
});


