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
            transformOrigin: "top right"
          });
        }
        setTimeout(function() {
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
            delay: 1
          });
        }
      }
    }
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
      }
    },
    {
      namespace: "product",
      beforeEnter(data) {
        stelScript();
        document.querySelector("body > header > nav > ul > li:nth-child(1) > a").classList.add("current-page");
      },
      beforeLeave(data) {
        document.querySelector("body > header > nav > ul > li:nth-child(1) > a").classList.remove("current-page");
      }
    },
    {
      namespace: "om",
      beforeEnter(data) {
        document.querySelector("body > header > nav > ul > li:nth-child(2) > a").classList.add("current-page");
      },
      beforeLeave(data) {
        document.querySelector("body > header > nav > ul > li:nth-child(2) > a").classList.remove("current-page");
      }
    },
    {
      namespace: "reparationer",
      beforeEnter(data) {
        document.querySelector("body > header > nav > ul > li:nth-child(3) > a").classList.add("current-page");
      },
      beforeLeave(data) {
        document.querySelector("body > header > nav > ul > li:nth-child(3) > a").classList.remove("current-page");
      }
    }
  ]
});

function indexScript() {
  document.querySelector(".logo").style.transition = "2s";
  document.querySelector(".logo").classList.remove("hidden");
  setTimeout(function() {
    animation1();
    animation2();
    animation3();
    animation4();
    addInstascript();
    indexLogoTransition();
  }, 1000);

  function indexLogoTransition() {
    const splashlogo = document.querySelector(".logo");

    window.addEventListener("scroll", function() {
      splashlogo.style.transition = "1s";

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
    ).innerHTML = ` <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0"  src="https://www.instagram.com/p/B4KlynDh-g7/embed/captioned/?cr=1&amp;v=12&amp;wp=687&amp;rd=http%3A%2F%2Flocalhost%3A1234&amp;rp=%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A479.83000008389354%2C%22ls%22%3A445.70000004023314%2C%22le%22%3A447.5050000473857%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="845" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="z-index: 1; background: white; max-width: 450px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 10px 12px; min-width: 326px; padding: 0px;"></iframe> <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/p/B26LJT_hdLT/embed/captioned/?cr=1&amp;v=12&amp;wp=533&amp;rd=http%3A%2F%2Flocalhost%3A1234&amp;rp=%2Findex.html#%7B%22ci%22%3A1%2C%22os%22%3A620.4250000882894%2C%22ls%22%3A383.34000017493963%2C%22le%22%3A394.9200001079589%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="870" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" style="z-index: 1; background: white; max-width: 450px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 10px 12px; min-width: 326px; padding: 0px;"></iframe>`;
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

      .setTween(tl)
      .addTo(controller);
  }

  function animation2() {
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
  }
}

function stelScript() {
  console.log("vis single funktion");
  let stels = [];

  loadWordpress();

  function loadWordpress() {
    async function getJson() {
      let url = "https://mouad.dk/Geden/wordpress/wp-json/wp/v2/stel?per_page=100";
      let jsonData = await fetch(url);
      stels = await jsonData.json();
      loadStel();
    }

    let filter = "all";
    let filter2 = "all";

    document.querySelectorAll(".filter").forEach(knap => {
      knap.addEventListener("click", filtrering);
    });
    document.querySelectorAll(".filter2").forEach(knap => {
      knap.addEventListener("click", filtrering2);
    });

    function filtrering() {
      document.querySelectorAll(".filter").forEach(knap => {
        knap.classList.remove("valgt");
      });
      this.classList.add("valgt");

      filter = this.getAttribute("data-hold");
      loadStel();
      console.log(filter);
      //filtrering iforhold til hus
    }
    function filtrering2() {
      document.querySelectorAll(".filter2").forEach(knap => {
        knap.classList.remove("valgt");
      });
      this.classList.add("valgt");

      filter2 = this.getAttribute("data-hold");
      loadStel();
      console.log(filter2);
      //filtrering iforhold til hus
    }

    function loadStel() {
      let dest = document.querySelector(".stel-container");
      let temp = document.querySelector("template");

      dest.innerHTML = "";
      stels.forEach(stel => {
        if ((filter == "all" || stel.filterstr == filter) && (filter2 == "all" || stel.tid == filter2)) {
          let klon = temp.cloneNode(true).content;
          klon.querySelector(".stel-image>img").src = stel.image.guid;
          klon.querySelector(".stel-title").textContent = stel.title.rendered;
          klon.querySelector(".span-size").textContent = stel.size;
          klon.querySelector(".span-year").textContent = stel.year;
          klon.querySelector(".stel-text").textContent = stel.om;
          klon.querySelector(".btn-stel").addEventListener("click", openForm);

          if (window.innerWidth > "700") {
            // If media query matches
            klon.querySelector(".stel-image>img").addEventListener("click", () => {
              document.querySelector("body").classList.add("noscroll");
              document.querySelector(".menu-btn").classList.add("hide-menu-btn");

              singleView(stel);
            });
          }
          dest.appendChild(klon);

          function openForm(e) {
            e = event.target;
            let stelname = e.parentElement.parentElement.firstElementChild.textContent;
            const backgroundoverlay = document.querySelector("#signoverlay");
            const signupform = document.querySelector("#signup");
            const closeBtn = document.querySelector("signup-close");
            backgroundoverlay.classList.remove("hide");
            setTimeout(function() {
              signupform.classList.remove("rotateY");
              document.querySelector("input[name='firstname']").focus();
            }, 400);

            backgroundoverlay.addEventListener("click", () => {
              backgroundoverlay.classList.add("hide");
              signupform.classList.add("rotateY");
            });

            closeBtn.addEventListener("click", () => {
              signupform.classList.add("rotateY");
            });

            formScript();

            function formScript() {
              const form = document.querySelector("#signup");
              const formfield = document.querySelectorAll("input");
              form.setAttribute("novalidate", true);

              formfield.forEach(formfield => {
                formfield.addEventListener("blur", checkValidity);
              });

              function checkValidity() {
                let firstNameValidity = document.querySelector("input[name='firstname']").checkValidity();
                let lastNameValidity = document.querySelector("input[name='lastname']").checkValidity();
                let emailValidity = document.querySelector("input[name='email']").checkValidity();
                let phoneValidity = document.querySelector("input[name='phone']").checkValidity();

                if (firstNameValidity === true && lastNameValidity === true && emailValidity === true && phoneValidity === true) {
                  document.querySelector("#submit").removeAttribute("disabled");
                  document.querySelector("#submit").classList.add("greenbutton");
                  console.log("Valid");
                } else {
                  console.log("Invalid");
                  document.querySelector("#submit").disabled = "true";
                  document.querySelector("#submit").classList.remove("greenbutton");
                }
              }

              document.querySelector("input[name='firstname']").addEventListener("blur", () => {
                let firstNameValidity = document.querySelector("input[name='firstname']").checkValidity();
                if (firstNameValidity === false) {
                  document.querySelector(".help1").classList.remove("hide_help");
                  document.querySelector("#L1").classList.add("invalid_state");
                } else {
                  document.querySelector(".help1").classList.add("hide_help");
                  document.querySelector("#L1").classList.remove("invalid_state");
                }
              });

              document.querySelector("input[name='lastname']").addEventListener("blur", () => {
                let lastNameValidity = document.querySelector("input[name='lastname']").checkValidity();
                if (lastNameValidity === false) {
                  document.querySelector(".help2").classList.remove("hide_help");
                  document.querySelector("#L2").classList.add("invalid_state");
                } else {
                  document.querySelector(".help2").classList.add("hide_help");
                  document.querySelector("#L2").classList.remove("invalid_state");
                }
              });

              document.querySelector("input[name='email']").addEventListener("blur", () => {
                let emailValidity = document.querySelector("input[name='email']").checkValidity();
                if (emailValidity === false) {
                  document.querySelector(".help6").classList.remove("hide_help");
                  document.querySelector("#L6").classList.add("invalid_state");
                } else {
                  document.querySelector(".help6").classList.add("hide_help");
                  document.querySelector("#L6").classList.remove("invalid_state");
                }
              });

              document.querySelector("input[name='phone']").addEventListener("blur", () => {
                let phoneValidity = document.querySelector("input[name='phone']").checkValidity();
                if (phoneValidity === false) {
                  document.querySelector(".help10").classList.remove("hide_help");
                  document.querySelector("#L10").classList.add("invalid_state");
                } else {
                  document.querySelector(".help10").classList.add("hide_help");
                  document.querySelector("#L10").classList.remove("invalid_state");
                }
              });

              document.querySelector("#submit").addEventListener("click", e => {
                console.log("button clicked");
                e.preventDefault();
                post();

                function post() {
                  const data = {
                    fornavn: "Geden",
                    efternavn: "Cykelværksted",
                    telefonnummer: "30229522",
                    email: "geden2300@hotmail.com",
                    stelnavn: "Jernhest"
                  };

                  data.fornavn = form.elements.firstname.value;
                  data.efternavn = form.elements.lastname.value;
                  data.telefonnummer = form.elements.phone.value;
                  data.email = form.elements.email.value;
                  data.stelnavn = stelname;

                  const postData = JSON.stringify(data);
                  fetch(`https://coldfriday-37b0.restdb.io/rest/geden2300`, {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8",
                      "x-apikey": "5dee0691bf46220df655d8c4",
                      "cache-control": "no-cache"
                    },
                    body: postData
                  })
                    .then(res => res.json())
                    .then(data => {
                      console.log(data);
                    });
                }

                document.querySelector("#signup").classList.add("rotateY");
                setTimeout(function() {
                  document.querySelector("#signupcomplete").classList.remove("hide");
                }, 1000);
              });

              document.querySelector("#signupcomplete > button").addEventListener("click", e => {
                document.querySelector("#signupcomplete").classList.add("hide");
                document.querySelector("#signoverlay").classList.add("hide");
              });
            }
          }
        }
      });
    }

    function singleView(stel) {
      document.querySelector("#indhold").innerHTML = `<div class="pop-up-background"></div><div class="ramme">
      <div id="luk"><button id="lukknap"></button></div>
      <img src=${stel.image.guid} alt=${stel.title.rendered}>
      <h2>${stel.title.rendered}</h2> 
      <div class="rammecentrer">
      <p>${stel.om}</p> 
      <br> 
      <p style="font-weight: 700; ">Størrelse: ${stel.size}</p> 
      <p style="font-weight: 700;">Årgang: ${stel.year}</p>
      </div>
      </div>`; /* Dette er hvad der skal fremgå i singleview, dette er altså hvad der skal erstattes i HTML. */
      document.querySelector("#pop-op").style.display = "block";
      document.querySelector("#pop-op #lukknap").addEventListener("click", close);
      console.log(stel);
    }
    function close() {
      document.querySelector("body").classList.remove("noscroll");
      document.querySelector("#pop-op").style.display = "none";
      document.querySelector(".menu-btn").classList.remove("hide-menu-btn");
      //lukker pop-op
    }

    getJson();
  }
}

function scrollHeader() {
  let scrollpos = window.scrollY;
  const header = document.querySelector("header");
  const burgerBtn = document.querySelector(".menu-btn");

  const add_class_on_scroll = () => header.classList.add("scrolled-header");
  const remove_class_on_scroll = () => header.classList.remove("scrolled-header");

  window.addEventListener("scroll", function() {
    scrollpos = window.scrollY;

    if (scrollpos >= 1) {
      add_class_on_scroll();
      burgerBtn.classList.remove("burger-scroll");
    } else {
      remove_class_on_scroll();
      burgerBtn.classList.add("burger-scroll");
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

      setTimeout(function() {
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
    setTimeout(function() {
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
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 300);

  scrollHeader();
  loadBurger();
});
