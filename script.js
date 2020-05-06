import barba from "@barba/core";

function pageTransition() {
  let tl = new TimelineMax();
  tl.to(".loading-screen", 0.5, { scaleY: 1, transformOrigin: "top right" });
}

function pageTransition2() {
  let tl = new TimelineMax();
  tl.to(".loading-screen", 0.5, { scaleY: 0, skewX: 0, transformOrigin: "top right", ease: "power1.out", delay: 1 });
}
barba.init({
  transitions: [
    {
      name: "default-transition",
      leave() {
        // create your stunning leave animation here
        const done = this.async();
        pageTransition();
        setTimeout(function() {
          done();
        }, 500);
      },
      enter() {
        // create your amazing enter animation here
        pageTransition2();
      }
    }
  ],

  views: [
    {
      namespace: "home",
      beforeLeave(data) {
        // do something before leaving the current `index` namespace
        console.log("farvel hjemskærm");
      },
      beforeEnter() {
        start();
      }
    },
    {
      namespace: "product",
      beforeEnter(data) {
        // do something before entering the `contact` namespace
        console.log("goddag stel skærm");

        start();
      },
      beforeLeave(data) {
        console.log("stel out");
      }
    }
  ]
});

barba.hooks.beforeEnter(data => {
  // this hook will be called during every transitions
  // before new page content enter…
  console.log("skifter side");
});

function start() {
  console.log("start kaldes");
  //ANIMATION NUMMER 1

  setTimeout(function() {
    animation1();
    animation2();
    animation3();
    animation4();
  }, 1000);

  function animation1() {
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
      .addTo(controller);
    // .addIndicators();
  }

  function animation2() {
    //ANIMATION NUMMER 2
    console.log("animation 2");
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
  }

  function animation3() {
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
  }

  function animation4() {
    //ANIMATION NUMMER 4

    let tl4 = new TimelineMax();

    const controller4 = new ScrollMagic.Controller();

    tl4.from(".animate-me-4", 1, { x: 100 });

    const scene4 = new ScrollMagic.Scene({
      triggerElement: ".animate-me-4",
      triggerHook: 1,
      duration: "100%"
    })
      .setTween(tl4)
      .addTo(controller4);

    // ANIMATION DONE
  }
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
}
