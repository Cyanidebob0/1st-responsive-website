
let main=document.querySelector("#main");
let cursor=document.querySelector("#cursor");

main.addEventListener("mousemove",(e)=>{
    gsap.to(cursor,{
        x: e.x, 
        y: e.y,
        duration : 0.5
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
    },
    y: "-300%",
    ease: Power1,
  });
  
  