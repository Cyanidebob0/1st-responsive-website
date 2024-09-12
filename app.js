let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let hero = document.querySelectorAll(".overlay");


main.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.x,
    y: e.y,
    duration: 1
  });
});


hero.forEach((ele1) => {
  ele1.addEventListener("mouseenter", (e) => {
    let element = e.target.getAttribute("id");
    
    if (element === "overlay1") {
      document.querySelector("#c1").style.color = "black";
    } else if (element === "overlay2") {
      document.querySelector("#c2").style.color = "black";
    } else {
      document.querySelector("#c3").style.color = "black";
    }

    gsap.to(cursor, {
      scale: 8
    });
  });
});

hero.forEach((ele2) => {
  ele2.addEventListener("mouseleave", (e) => {
    let element = e.target.getAttribute("id");

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
  });
});
