import barba from "@barba/core";

function pageTransition() {
  let tl = new TimelineMax();
  tl.to(".loading-screen", 0.5, { scaleY: 1, transformOrigin: "top right" });
}

function pageTransition2() {
  let tl = new TimelineMax();
  tl.to(".loading-screen", 0.5, {
    scaleY: 0,
    skewX: 0,
    transformOrigin: "top right",
    ease: "power1.out",
    delay: 1
  });
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
        document.querySelector("body").classList.remove("home");
      },
      beforeEnter() {
        document.querySelector("body").classList.add("home");
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
    },
    {
      namespace: "reparationer",
      beforeEnter(data) {
        start();
      }
    }
  ]
});

barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

function start() {
  console.log("start kaldes");
  //ANIMATION NUMMER 1

  loadBurger();

  setTimeout(function() {
    animation1();
    animation2();
    animation3();
    animation4();
    addInstascript();
  }, 1000);

  function addInstascript() {
    document.querySelector(".instafeed").innerHTML = "";

    document.querySelector(
      ".instafeed"
    ).innerHTML = ` <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0"  src="https://www.instagram.com/p/B4KlynDh-g7/embed/captioned/?cr=1&amp;v=12&amp;wp=687&amp;rd=http%3A%2F%2Flocalhost%3A1234&amp;rp=%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A479.83000008389354%2C%22ls%22%3A445.70000004023314%2C%22le%22%3A447.5050000473857%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="845" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; max-width: 550px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe> <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/p/B26LJT_hdLT/embed/captioned/?cr=1&amp;v=12&amp;wp=533&amp;rd=http%3A%2F%2Flocalhost%3A1234&amp;rp=%2Findex.html#%7B%22ci%22%3A1%2C%22os%22%3A620.4250000882894%2C%22ls%22%3A383.34000017493963%2C%22le%22%3A394.9200001079589%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="870" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" style="background: white; max-width: 550px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>`;
  }
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

  function loadBurger() {
    // https://codepen.io/StevenBarnes/pen/YzPbmjM

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const desktopHeader = document.querySelector("header");

    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
        mobileMenu.style.display = "block";
        mobileMenu.classList.add("menu-transition");
        desktopHeader.style.display = "none";
      } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        mobileMenu.classList.remove("menu-transition");
        mobileMenu.style.display = "none";
        desktopHeader.style.display = "block";
      }
    });
  }

  // HEADER CLASS DONE
}
