
let main=document.querySelector("#main");
let cursor=document.querySelector("#cursor");
let hero=document.querySelectorAll(".overlay");
let cBgCcolor=document.querySelector(".hvr")

 main.addEventListener("mousemove",(e)=>{
     gsap.to(cursor,{
         x: e.x, 
         y: e.y,
         duration : 1
     })
 })


gsap.to(".fleftelm", {
    scrollTrigger: {
      trigger: ".f-images",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
      invalidateOnRefresh: true,
    },
    y: "-300%",
    ease: Power1,
  });


 hero.forEach((ele)=>{
    ele.addEventListener("mouseenter",()=>{
      gsap.to(cursor,{
        scale:8,
      })
    })
 })

 hero.forEach((ele)=>{
  ele.addEventListener("mouseleave",()=>{
    cBgCcolor.style.color="";  
    gsap.to(cursor,{
        scale:1,
      })
  })
})

 


  
  