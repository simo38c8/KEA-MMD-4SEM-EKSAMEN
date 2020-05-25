import barba from "@barba/core";

barba.init({
  transitions: [
    {
      name: "default-transition",
      leave() {
        const done = this.async();
        pageTransition();
        function pageTransition() {
          let tl = new TimelineMax();
          tl.to(".loading-screen", 0.5, {
            scaleY: 1,
            transformOrigin: "top right",
          });
        }
        setTimeout(function () {
          done();
        }, 500);
      },
      enter() {
        pageTransition2();
        function pageTransition2() {
          let tl = new TimelineMax();
          tl.to(".loading-screen", 0.5, {
            scaleY: 0,
            skewX: 0,
            transformOrigin: "top right",
            ease: "power1.out",
            delay: 1,
          });
        }
      },
    },
  ],

  views: [
    {
      namespace: "home",
      beforeLeave(data) {
        document.querySelector("body").classList.remove("home");
      },
      beforeEnter() {
        document.querySelector("body").classList.add("home");
        indexScript();
      },
    },
    {
      namespace: "product",
      beforeEnter(data) {
        stelScript();
        document
          .querySelector("body > header > nav > ul > li:nth-child(1) > a")
          .classList.add("current-page");
      },
      beforeLeave(data) {
        document
          .querySelector("body > header > nav > ul > li:nth-child(1) > a")
          .classList.remove("current-page");
      },
    },
    {
      namespace: "om",
      beforeEnter(data) {
        document
          .querySelector("body > header > nav > ul > li:nth-child(2) > a")
          .classList.add("current-page");
      },
      beforeLeave(data) {
        document
          .querySelector("body > header > nav > ul > li:nth-child(2) > a")
          .classList.remove("current-page");
      },
    },
    {
      namespace: "reparationer",
      beforeEnter(data) {
        document
          .querySelector("body > header > nav > ul > li:nth-child(3) > a")
          .classList.add("current-page");
      },
      beforeLeave(data) {
        document
          .querySelector("body > header > nav > ul > li:nth-child(3) > a")
          .classList.remove("current-page");
      },
    },
  ],
});

function indexScript() {
  document.querySelector(".logo").style.transition = "2s";
  document.querySelector(".logo").classList.remove("hidden");
  setTimeout(function () {
    animation1();
    animation2();
    animation3();
    animation4();
    addInstascript();
    indexLogoTransition();
  }, 1000);

  function indexLogoTransition() {
    const splashlogo = document.querySelector(".logo");

    window.addEventListener("scroll", function () {
      splashlogo.style.transition = "1s";
      console.log("scroll test");
      let scrollpos = window.scrollY;
      if (scrollpos >= 120) {
        splashlogo.classList.add("hidden");
      } else {
        splashlogo.classList.remove("hidden");
      }
    });
  }

  function addInstascript() {
    document.querySelector(".instafeed").innerHTML = "";

    document.querySelector(
      ".instafeed"
    ).innerHTML = ` <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0"  src="https://www.instagram.com/p/B4KlynDh-g7/embed/captioned/?cr=1&amp;v=12&amp;wp=687&amp;rd=http%3A%2F%2Flocalhost%3A1234&amp;rp=%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A479.83000008389354%2C%22ls%22%3A445.70000004023314%2C%22le%22%3A447.5050000473857%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="845" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; max-width: 450px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 10px 12px; min-width: 326px; padding: 0px;"></iframe> <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/p/B26LJT_hdLT/embed/captioned/?cr=1&amp;v=12&amp;wp=533&amp;rd=http%3A%2F%2Flocalhost%3A1234&amp;rp=%2Findex.html#%7B%22ci%22%3A1%2C%22os%22%3A620.4250000882894%2C%22ls%22%3A383.34000017493963%2C%22le%22%3A394.9200001079589%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="870" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" style="background: white; max-width: 450px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 10px 12px; min-width: 326px; padding: 0px;"></iframe>`;
  }
  function animation1() {
    let tl = new TimelineMax();
    const controller = new ScrollMagic.Controller();
    tl.from(".animate-me", 1, { x: 100 });

    const scene = new ScrollMagic.Scene({
      triggerElement: ".animate-me",
      triggerHook: 1, // "onLeave", 0-1
      duration: "100%",
    })
      // .setPin(".canvas")
      .setTween(tl)
      .addTo(controller);
    // .addIndicators();
  }

  function animation2() {
    //ANIMATION NUMMER 2

    let tl2 = new TimelineMax();

    const controller2 = new ScrollMagic.Controller();

    tl2.to(".animate-me-2", 1, { x: 100 });

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".animate-me-2",
      triggerHook: 1,
      duration: "100%",
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
      duration: "100%",
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
      duration: "100%",
    })
      .setTween(tl4)
      .addTo(controller4);
  }
}

function stelScript() {
  console.log("vis single funktion");
  let stels = [];

  loadWordpress();

  function loadWordpress() {
    async function getJson() {
      let url =
        "https://mouad.dk/Geden/wordpress/wp-json/wp/v2/stel?per_page=100";
      let jsonData = await fetch(url);
      stels = await jsonData.json();
      loadStel();
    }

    let filter = "all";

    document.querySelectorAll(".filter").forEach((knap) => {
      knap.addEventListener("click", filtrering);
    });

    function filtrering() {
      document.querySelectorAll(".filter").forEach((knap) => {
        knap.classList.remove("valgt");
      });
      this.classList.add("valgt");

      filter = this.getAttribute("data-hold");
      loadStel();
      console.log(filter);
      //filtrering iforhold til hus
    }

    function loadStel() {
      let dest = document.querySelector(".stel-container");
      let temp = document.querySelector("template");

      dest.innerHTML = "";
      stels.forEach((stel) => {
        if (filter == "all" || stel.year == filter) {
          let klon = temp.cloneNode(true).content;
          klon.querySelector(".stel-image>img").src = stel.image.guid;
          klon.querySelector(".stel-title").textContent = stel.title.rendered;
          klon.querySelector(".span-size").textContent = stel.size;
          klon.querySelector(".span-year").textContent = stel.year;

          dest.appendChild(klon);
        }
        // dest.lastElementChild.addEventListener("click", () => {
        //   singleView(stel);
        // });
      });
    }

    function singleView(stel) {
      document.querySelector(
        "#indhold"
      ).innerHTML = `<div class="heightramme"><div class="ramme"><img src=${stel.billede.guid} alt=${stel.title.rendered}><h2>${stel.title.rendered}</h2> <div class="rammecentrer"><p>${stel.product_text}</p> <br> <p>Størrelse: ${produkt.size}</p> <p>Pris: ${produkt.price}</p></div></div></div>`; /* Dette er hvad der skal fremgå i singleview, dette er altså hvad der skal erstattes i HTML. */
      document.querySelector("#popup").style.display =
        "block"; /* "#popup" skal fjernes */
      document.querySelector("#popup #luk").addEventListener("click", close);

      function close() {
        document.querySelector("#popup").style.display = "none";
      }
    }

    getJson();
  }
}

function scrollHeader() {
  let scrollpos = window.scrollY;
  const header = document.querySelector("header");

  const add_class_on_scroll = () => header.classList.add("scrolled-header");
  const remove_class_on_scroll = () =>
    header.classList.remove("scrolled-header");

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= 1) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });
}

function loadBurger() {
  // MENU PROBLEMS

  // navigate to the same page twice it breaks

  // https://codepen.io/StevenBarnes/pen/YzPbmjM

  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  let menuOpen = false;

  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menuOpen = true;
      mobileMenu.style.display = "block";

      setTimeout(function () {
        mobileMenu.classList.add("menu-transition");
      }, 500);

      console.log(menuOpen);
    } else {
      menuBtn.classList.remove("open");
      mobileMenu.classList.remove("menu-transition");
      menuOpen = false;

      mobileMenu.style.display = "none";
      console.log(menuOpen);
    }
  });

  // ON PAGE LEAVE

  barba.hooks.leave(() => {
    setTimeout(function () {
      mobileMenu.style.display = "none";
      mobileMenu.classList.remove("menu-transition");
    }, 700);

    menuBtn.classList.remove("open");

    console.log(menuOpen);
  });
}

scrollHeader();
loadBurger();

barba.hooks.enter(() => {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 300);

  scrollHeader();
  loadBurger();
});
