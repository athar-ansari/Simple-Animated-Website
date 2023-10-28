var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});


gsap.to("#nav", {
    backgroundColor: "#95c11e",
    duration: 0.5,
    height: "85px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
});


gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 25%",
      scrub: 4,
    },
  });

  gsap.from(".footer h1", {
    y: 50,
    scrollTrigger: {
      trigger: ".footer h1",
      scroller: "body",
      // markers:true,
      start: "top 95%",
      end: "top 70%",
      scrub: 2,
    },
  });


                                                                              // THE END