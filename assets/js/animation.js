// initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// introduction animation
gsap.from(".cover-box", { scale: 2 });
gsap.to(".cover-box", {
  scale: 1,
  duration: 2,
  ease: "expo",
});
gsap.from(".header-text", { y: 512 });
gsap.to(".header-text", {
  y: 0,
  duration: 3,
  ease: "expo",
});

// formats conclusion animation
var conclusiontl = gsap.timeline({
  scrollTrigger: {
    trigger: ".conclusion-parent",
    scrub: true,
    pin: true,
    start: "top top",
    end: "100%",
  },
});

conclusiontl.from(".conclusion", { x: 1600 });
conclusiontl.to("conclusion", { x: 0 });

//introduction logos section
if ($(window).width() >= 769) {
  var intrologointrotl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intros-parent",
      scrub: 0.1,
      pin: true,
      start: "top top",
      end: "+=3000",
    },
  });

  intrologointrotl.from(".intro-first-text h1", { opacity: 0 });
  intrologointrotl.to(".intro-first-text h1", { opacity: 1 });
  intrologointrotl.from(".warning-background", { x: 1920 });
  intrologointrotl.to(".warning-background", {
    x: 0,
  });

  intrologointrotl.from(".second-part-text-div h1", { y: 0 });
  intrologointrotl.to(".second-part-text-div h1", { y: -200, duration: 1 });
  intrologointrotl.from(".warning-box h4", { y: 550 });
  intrologointrotl.to(".warning-box h4", { y: -2500 });
}

// bootleg introduction section
if ($(window).width() >= 769) {
  // animation 1
  var bootlegintro1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bootleg-header-anim-1",
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=1000",
    },
  });

  bootlegintro1.from(".bootleg-anim-1", { opacity: 0 });
  bootlegintro1.to(".bootleg-anim-1", { opacity: 1 });
  bootlegintro1.from(".bootleg-anim-1", { opacity: 1 });
  bootlegintro1.to(".bootleg-anim-1", { opacity: 0 });

  // animation 2
  var bootlegintro2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bootleg-header-anim-2",
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=1000",
    },
  });

  bootlegintro2.from(".bootleg-anim-2", { opacity: 0 });
  bootlegintro2.to(".bootleg-anim-2", { opacity: 1 });
  bootlegintro2.from(".bootleg-anim-2", { opacity: 1 });
  bootlegintro2.to(".bootleg-anim-2", { opacity: 0 });

  // animation 3
  var bootlegintro3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bootleg-header-anim-3",
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=1000",
    },
  });

  bootlegintro3.from(".bootleg-anim-3", { opacity: 0 });
  bootlegintro3.to(".bootleg-anim-3", { opacity: 1 });
  bootlegintro3.from(".bootleg-anim-3", { opacity: 1 });
  bootlegintro3.to(".bootleg-anim-3", { opacity: 0 });

  // animation 4
  var bootlegintro4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".bootleg-header-anim-4",
      scrub: 1,
      pin: true,
      start: "top top",
      end: "=1000",
    },
  });

  bootlegintro4.from(".bootleg-header-anim-4", { opacity: 0 });
  bootlegintro4.to(".bootleg-header-anim-4", { opacity: 1, duration: 2 });
}
