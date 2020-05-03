//ANIMATION NUMMER 1

let tl = new TimelineMax();

const controller = new ScrollMagic.Controller();

tl.from(".animate-me", 1, { x: 100 });

const scene = new ScrollMagic.Scene({
  triggerElement: ".animate-me",
  triggerHook: 1, // "onLeave", 0-1
  duration: "100%"
})
  // .setPin(".canvas")
  .setTween(tl)
  .addTo(controller)
  .addIndicators();

//ANIMATION NUMMER 2

let tl2 = new TimelineMax();

const controller2 = new ScrollMagic.Controller();

tl2.to(".animate-me-2", 1, { x: 100 });

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".animate-me-2",
  triggerHook: 1,
  duration: "100%"
})
  .setTween(tl2)
  .addTo(controller2);

// ANIMATION DONE

//ANIMATION NUMMER 3

let tl3 = new TimelineMax();

const controller3 = new ScrollMagic.Controller();

tl3.to(".animate-me-3", 1, { rotation: 90 });

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".animate-me-3",
  triggerHook: 1,
  duration: "100%"
})
  .setTween(tl3)
  .addTo(controller3);

// ANIMATION DONE

// ADD CLASS TO HEADER ON SCROLL POS

let scrollpos = window.scrollY;
const header = document.querySelector("header");
// const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("scrolled-header");
const remove_class_on_scroll = () => header.classList.remove("scrolled-header");

window.addEventListener("scroll", function() {
  scrollpos = window.scrollY;

  if (scrollpos >= 1) {
    //  or > header_height
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  // console.log(scrollpos);
});

// HEADER CLASS DONE
