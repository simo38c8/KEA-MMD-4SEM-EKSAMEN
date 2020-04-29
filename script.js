let tl = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from(".animate-me", 1, { x: window.innerWidth });

const scene = new ScrollMagic.Scene({
  triggerElement: ".animate-me",
  triggerHook: 1, // "onLeave", 0-1
  duration: "100%"
})
  // .setPin(".canvas")
  .setTween(tl)
  .addTo(controller)
  .addIndicators();

//LORT NUMMER 2

let tl2 = new TimelineMax();

const controller2 = new ScrollMagic.Controller();

tl2.to(".animate-me-2", 1, { x: window.innerWidth });

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".animate-me-2",
  triggerHook: 1,
  duration: "100%"
})
  .setTween(tl2)
  .addTo(controller2);
