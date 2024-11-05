function locoscroll() {{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scroller: ".smooth-scroll",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: self => console.log(self.direction)
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scroller: ".smooth-scroll",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- PURPLE/GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    }
  });

tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
  .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".purple", {backgroundColor: "#28a92b"}, 0);



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

    
}}


function cursorEffect() {
  
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    }) 
    })

    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
cursorEffect()

function page2Animation() {
    gsap.from(".elem h1",{
        y:120,
        stagger:0.2,
        duration: 1,
        scrolltrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            marker: true,
            scrub: 2
        }
    })
}
page2Animation()

function countdown() {
    // Countdown Timer Script
document.addEventListener('DOMContentLoaded', () => {
    // Set the date you're counting down to
    // Example: October 17, 2024 09:00:00
    const countdownDate = new Date("November 11, 2024 09:00:00").getTime();

    // Update the count down every 1 second
    const countdownFunction = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // If the countdown is over, display a message
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("countdown").innerHTML = "<p>The IIT Mumbai Tech Fest has started!</p>";
        }
    }, 1000);
});

}
countdown()

// After loader animation, hide the loader and show the main content





document.body.classList.add('loading'); // Add class when loader is shown
document.body.classList.remove('loading'); // Remove class when loader is hidden

window.onload = function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none'; // Hide loader

         // Initialize Swiper for swiper1
        var swiper1 = new Swiper(".mySwiper1", {
          spaceBetween: 30,
          centeredSlides: true,
          loop:true,
          autoplay: {
              delay: 2500,
              disableOnInteraction: false,
          },
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
          },
        
      });

      // Initialize other animations or scripts here
  }, 3000); // Adjust time as needed
};



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  freeMode: {
      enabled: true,
      sticky: true,
      momentumRatio: 0.25,
      momentumVelocityRatio: 0.5,
  },
  grabCursor: true,
  loop: true,  // Enable looping for continuous swipe
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      1024: {
          slidesPerView: 4,
          spaceBetween: 30
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 20
      },
      480: {
          slidesPerView: 2,
          spaceBetween: 10
      }
  },
});
// Remove the custom reachEnd and reachBeginning logic
// Remove the custom setTranslate logic



var tl = gsap.timeline()

tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to("#loader h3",{
  opacity:0,
  x:-40,
  stagger:0.1,
  duration:1
})
tl.from("#page1-content h1 span",{
  y:100,
  opacity:0,
  stagger:0.3,
  duration:1,
  
})
tl.to("#loader",{
  opacity:0
})
tl.to("#loader",{
  display:none
})



document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtns = document.querySelectorAll('.showMoreBtn');
    
    showMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const moreInfo = this.closest('.card').querySelector('.more-info');
            if (moreInfo.classList.contains('show')) {
                moreInfo.classList.remove('show');
                this.textContent = 'Show More';
            } else {
                moreInfo.classList.add('show');
                this.textContent = 'Show Less';
            }
        });
    });

//     const hamburger = document.querySelector('.hamburger input');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const navLinks = document.querySelector('.nav-links');
//     const mobileMenuContent = document.querySelector('.mobile-menu-content');

//     // Function to populate mobile menu
//     function populateMobileMenu() {
//         mobileMenuContent.innerHTML = ''; // Clear existing content
//         const links = navLinks.querySelectorAll('a');
//         links.forEach(link => {
//             const newLink = link.cloneNode(true);
//             mobileMenuContent.appendChild(newLink);
//         });
//     }

//     // Populate mobile menu on load
//     populateMobileMenu();

//     if (hamburger && mobileMenu) {
//         hamburger.addEventListener('change', function() {
//             if (this.checked) {
//                 mobileMenu.classList.add('active');
//             } else {
//                 mobileMenu.classList.remove('active');
//             }
//         });

//         // Close menu when a link is clicked
//         mobileMenuContent.addEventListener('click', function(e) {
//             if (e.target.tagName === 'A') {
//                 hamburger.checked = false;
//                 mobileMenu.classList.remove('active');
//             }
//         });
//     } else {
//         console.error('Hamburger menu elements not found');
//     }

//     // Update mobile menu if nav-links change
//     const observer = new MutationObserver(populateMobileMenu);
//     observer.observe(navLinks, { childList: true, subtree: true });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const mobileMenu = document.querySelector('.mobile-menu');
//     const mobileMenuContent = document.querySelector('.mobile-menu-content');
//     const navBox2 = document.getElementById('nav-box2');

//     // Function to populate mobile menu
//     function populateMobileMenu() {
//         mobileMenuContent.innerHTML = ''; // Clear existing content
//         const navItems = navBox2.getElementsByTagName('h4');
//         for (let item of navItems) {
//             const link = document.createElement('a');
//             link.href = '#'; // Set appropriate href
//             link.textContent = item.textContent;
//             mobileMenuContent.appendChild(link);
//         }
//     }

//     // Populate mobile menu on load
//     populateMobileMenu();

//     // Toggle mobile menu
//     mobileMenuToggle.addEventListener('click', function() {
//         mobileMenu.classList.toggle('active');
//     });

//     // Close menu when a link is clicked
//     mobileMenuContent.addEventListener('click', function(e) {
//         if (e.target.tagName === 'A') {
//             mobileMenu.classList.remove('active');
//         }
//     });

//     // Update mobile menu if nav-box2 changes
//     const observer = new MutationObserver(populateMobileMenu);
//     observer.observe(navBox2, { childList: true, subtree: true });
// });
});
document.getElementById("menuToggle").addEventListener("change", function() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = this.checked ? "block" : "none"; // Show or hide dropdown
});

function first(){
  gsap.registerPlugin(ScrollTrigger, Observer, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

let sections = gsap.utils.toArray(".panel");
let dragRatio = 1;
let scrollTo;

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
    onRefresh: (self) => {
      dragRatio =
        (self.end - self.start) /
        ((sections.length - 1) * sections[0].offsetWidth);
    },
    //snap: directionalSnap(1 / (sections.length - 1)),
    end: "+=3000"
  }
});

Observer.create({
  target: ".container",
  type: "wheel,touch,pointer",
  onPress: (self) => {
    self.startScroll = scrollTween.scrollTrigger.scroll();
    scrollTo = gsap.quickTo(scrollTween.scrollTrigger, "scroll", {
      duration: 0.2,
      ease: "power3"
    });
  },
  onDrag: (self) => {
    scrollTo(self.startScroll + (self.startX - self.x) * dragRatio);
  }
});

gsap.set(".box-1, .box-2", { y: 100 });
ScrollTrigger.defaults({ markers: { startColor: "white", endColor: "white" } });

// red section
gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset",
    id: "1"
  }
});

// gray section
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "2"
  }
});

// purple section
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3"
});

// green section
ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: (self) => console.log("active", self.isActive),
  id: "4"
});

// only show the relevant section's markers at any given time
gsap.set(
  ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
  { autoAlpha: 0 }
);
["red", "gray", "purple", "green"].forEach((triggerClass, i) => {
  ScrollTrigger.create({
    trigger: "." + triggerClass,
    containerAnimation: scrollTween,
    start: "left 30%",
    end: i === 3 ? "right right" : "right 30%",
    markers: false,
    onToggle: (self) =>
      gsap.to(".marker-" + (i + 1), {
        duration: 0.25,
        autoAlpha: self.isActive ? 1 : 0
      })
  });
});

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

// making the code pretty/formatted.
PR.prettyPrint();

}
first()
gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset"
  }
});
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true
  }
});
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%"
});
ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "center 65%",
  end: "center 51%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive)
});