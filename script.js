/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.1
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================
   OCEANEERING PRESENTATION SLIDESHOW
========================================= */

const slider = document.getElementById("oceaneeringSlider");

if (slider) {

  const slides = [

    {
      image: "images/oceaneering-slides/slide-01.png",

      alt:
        "Oceaneering Business Analyst IT Financial Solutions internship presentation title slide",

      label:
        "INTERNSHIP PRESENTATION",

      title:
        "Business Analyst - IT Financial Solutions",

      description:
        "Final internship presentation created with my fellow intern for Oceaneering's IT Financial Solutions team."
    },


    {
      image: "images/oceaneering-slides/slide-02.png",

      alt:
        "Oceaneering internship skills slide covering Excel Visio GEP and ManageEngine ServiceDesk",

      label:
        "TECHNICAL SKILLS",

      title:
        "Enterprise Tools & Data Analysis",

      description:
        "Hands-on experience with Microsoft Excel, Visio, supplier data, and ManageEngine ServiceDesk."
    },


    {
      image: "images/oceaneering-slides/slide-03.png",

      alt:
        "Oceaneering internship skills slide covering PeopleSoft SQL and professional skills",

      label:
        "DATA & PROFESSIONAL SKILLS",

      title:
        "PeopleSoft, SQL & Problem Solving",

      description:
        "Worked with PeopleSoft financial queries while developing problem solving, communication, reporting, and prioritization skills."
    },


    {
      image: "images/oceaneering-slides/slide-04.png",

      alt:
        "Oceaneering internship application slide",

      label:
        "APPLICATION",

      title:
        "Applying Technical Skills in the Business",

      description:
        "Gained exposure to IT processes, supplier analysis, PeopleSoft Financials queries, and cross-functional IT and Treasury collaboration."
    },


    {
      image: "images/oceaneering-slides/slide-05.png",

      alt:
        "Oceaneering internship accomplishments slide",

      label:
        "ACCOMPLISHMENTS",

      title:
        "Projects, Analysis & Knowledge Sharing",

      description:
        "Highlights included invoice auditing, error analysis, reconciliations, and helping an AP clerk create a Supplier Reconciliation."
    },


    {
      image: "images/oceaneering-slides/slide-06.png",

      alt:
        "Favorite Part Peter slide from Oceaneering internship presentation",

      label:
        "MY EXPERIENCE",

      title:
        "Favorite Parts of the Internship",

      description:
        "Hands-on learning, contributing with mentors and cross-functional teams, volunteering, and approaching problems from both business and technical perspectives."
    },


    {
      image: "images/oceaneering-slides/slide-07.png",

      alt:
        "Oceaneering internship presentation thank you slide",

      label:
        "CLOSING",

      title:
        "Thank You, Oceaneering",

      description:
        "Closing slide from the final internship presentation."
    }

  ];


  /* =========================================
     ELEMENTS
  ========================================= */

  const slideImage =
    document.getElementById("presentationSlide");

  const slideLabel =
    document.getElementById("presentationSlideLabel");

  const slideTitle =
    document.getElementById("presentationSlideTitle");

  const slideDescription =
    document.getElementById("presentationSlideDescription");

  const currentCounter =
    document.getElementById("presentationCurrent");

  const totalCounter =
    document.getElementById("presentationTotal");

  const previousButton =
    document.getElementById("sliderPrevious");

  const nextButton =
    document.getElementById("sliderNext");

  const dotsContainer =
    document.getElementById("presentationDots");


  let currentSlide = 0;

  let touchStartX = 0;

  let touchEndX = 0;


  totalCounter.textContent = slides.length;


  /* =========================================
     CREATE DOTS
  ========================================= */

  slides.forEach((slide, index) => {

    const dot = document.createElement("button");

    dot.type = "button";

    dot.className = "presentation-dot";

    dot.setAttribute(
      "aria-label",
      `Go to slide ${index + 1}`
    );


    dot.addEventListener("click", () => {

      currentSlide = index;

      updateSlide();

    });


    dotsContainer.appendChild(dot);

  });


  /* =========================================
     UPDATE SLIDE
  ========================================= */

  function updateSlide() {

    const slide = slides[currentSlide];


    slideImage.classList.add("slide-changing");


    window.setTimeout(() => {

      slideImage.src = slide.image;

      slideImage.alt = slide.alt;

      slideLabel.textContent = slide.label;

      slideTitle.textContent = slide.title;

      slideDescription.textContent =
        slide.description;

      currentCounter.textContent =
        currentSlide + 1;


      const dots =
        dotsContainer.querySelectorAll(
          ".presentation-dot"
        );


      dots.forEach((dot, index) => {

        dot.classList.toggle(
          "active",
          index === currentSlide
        );


        dot.setAttribute(
          "aria-current",
          index === currentSlide
            ? "true"
            : "false"
        );

      });


      slideImage.classList.remove(
        "slide-changing"
      );

    }, 150);

  }


  /* =========================================
     NEXT SLIDE
  ========================================= */

  function showNextSlide() {

    currentSlide =
      (currentSlide + 1) % slides.length;

    updateSlide();

  }


  /* =========================================
     PREVIOUS SLIDE
  ========================================= */

  function showPreviousSlide() {

    currentSlide =
      (currentSlide - 1 + slides.length)
      % slides.length;

    updateSlide();

  }


  /* =========================================
     BUTTON CONTROLS
  ========================================= */

  nextButton.addEventListener(
    "click",
    showNextSlide
  );


  previousButton.addEventListener(
    "click",
    showPreviousSlide
  );


  /* =========================================
     KEYBOARD CONTROLS
  ========================================= */

  slider.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "ArrowRight") {

        showNextSlide();

      }


      if (event.key === "ArrowLeft") {

        showPreviousSlide();

      }

    }
  );


  /* =========================================
     MOBILE SWIPE
  ========================================= */

  slider.addEventListener(
    "touchstart",
    (event) => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    {
      passive: true
    }
  );


  slider.addEventListener(
    "touchend",
    (event) => {

      touchEndX =
        event.changedTouches[0].screenX;


      const swipeDistance =
        touchEndX - touchStartX;


      if (Math.abs(swipeDistance) < 50) {

        return;

      }


      if (swipeDistance < 0) {

        showNextSlide();

      } else {

        showPreviousSlide();

      }

    },
    {
      passive: true
    }
  );


  /* =========================================
     START SLIDESHOW
  ========================================= */

  updateSlide();

}
