// ----------------------------------------------------
// SMOOTH SCROLL TO TOP ON PAGE RELOAD
// ----------------------------------------------------
window.history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 50); // small delay so browser can render first
});

// ----------------------------------------------------
// NAVBAR ACTIVE LINK SWITCHING (CLICK)
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // ----------------------------------------------------
    // AUTO-HIGHLIGHT NAVBAR WHILE SCROLLING
    // ----------------------------------------------------
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + 250;

        sections.forEach(section => {
            let top = section.offsetTop;
            let height = section.offsetHeight;
            let id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

});

// 1. Define the element variable first
const hoverBlur = document.querySelector('.hover-blur');

// 2. Variables for smooth animation
let mouseX = 0;
let mouseY = 0;
let blurX = 0;
let blurY = 0;
const speed = 0.1; // Smoothness factor

// 3. The Animation Loop
function animateBlur() {
    // Calculate the distance to move (easing)
    const distX = mouseX - blurX;
    const distY = mouseY - blurY;
    
    // Move a fraction of the distance
    blurX += distX * speed;
    blurY += distY * speed;
    
    // Apply the coordinates to the style
    hoverBlur.style.left = blurX + 'px';
    hoverBlur.style.top = blurY + 'px';
    
    // Request the next frame
    requestAnimationFrame(animateBlur);
}

// 4. Mouse Event Listeners
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    hoverBlur.classList.add('visible');
});

document.addEventListener('mouseleave', function() {
    hoverBlur.classList.remove('visible');
});

document.addEventListener('mouseenter', function() {
    hoverBlur.classList.add('visible');
});

// 5. Start the loop
animateBlur();

// Optional: Hide it when the mouse leaves the window
document.addEventListener('mouseleave', () => {
    hoverBlur.classList.remove('visible');
});

document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typing', { // Note the 'd' in Typed
    strings: ['Computer Science Student', 'First Year Student'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
  });
});

function copyPhone() {
    navigator.clipboard.writeText("0966 689 3257");
    alert("Phone Number Copied")
}