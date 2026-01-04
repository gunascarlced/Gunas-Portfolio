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
    }, 50); 
});

// ----------------------------------------------------
// MOBILE MENU TOGGLE
// ----------------------------------------------------
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    }
});

// ----------------------------------------------------
// NAVBAR ACTIVE LINK SWITCHING
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Click handler for manual navigation
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Auto-highlight navbar while scrolling
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

// ----------------------------------------------------
// HOVER BLUR EFFECT (Desktop Only)
// ----------------------------------------------------
const hoverBlur = document.querySelector('.hover-blur');

// Check if device supports hover
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let mouseX = 0;
    let mouseY = 0;
    let blurX = 0;
    let blurY = 0;
    const speed = 0.1;

    function animateBlur() {
        const distX = mouseX - blurX;
        const distY = mouseY - blurY;
        
        blurX += distX * speed;
        blurY += distY * speed;
        
        hoverBlur.style.left = blurX + 'px';
        hoverBlur.style.top = blurY + 'px';
        
        requestAnimationFrame(animateBlur);
    }

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

    animateBlur();
}

// ----------------------------------------------------
// TYPED.JS ANIMATION
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Typed !== 'undefined') {
        var typed = new Typed('#typing', {
            strings: ['Computer Science Student', 'First Year Student'],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });
    }
});

// ----------------------------------------------------
// CONTACT CARD FLIP & INSTRUCTION HANDLER
// ----------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const flipCard = document.querySelector('.flip-card');
    const flipCardInner = document.querySelector('.flip-card-inner');
    const cardInstruction = document.getElementById('cardInstruction');
    
    // Check if device is touch-only (no hover support)
    const isTouchDevice = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    
    if (isTouchDevice) {
        // TOUCH DEVICE MODE - Click to flip
        let isFlipped = false;
        
        // Set initial instruction
        if (cardInstruction) {
            cardInstruction.textContent = '_CLICK_TO_DECRYPT_';
        }
        
        if (flipCard && flipCardInner && cardInstruction) {
            flipCard.addEventListener('click', function(e) {
                // Prevent link clicks from flipping
                if (e.target.tagName !== 'A') {
                    flipCardInner.classList.toggle('flipped');
                    isFlipped = !isFlipped;
                    
                    // Update instruction based on state
                    if (isFlipped) {
                        cardInstruction.textContent = '_CLICK_TO_ENCRYPT_';
                    } else {
                        cardInstruction.textContent = '_CLICK_TO_DECRYPT_';
                    }
                }
            });
        }
    } else {
        // HOVER DEVICE MODE - Hover to flip
        
        // Set initial instruction
        if (cardInstruction) {
            cardInstruction.textContent = '_HOVER_TO_DECRYPT_';
        }
        
        if (flipCard && cardInstruction) {
            // Using mouseenter and mouseleave for better control
            flipCard.addEventListener('mouseenter', function() {
                cardInstruction.textContent = '_UNHOVER_TO_ENCRYPT_';
            });
            
            flipCard.addEventListener('mouseleave', function() {
                cardInstruction.textContent = '_HOVER_TO_DECRYPT_';
            });
            
            // Also handle when mouse moves within the card
            flipCard.addEventListener('mousemove', function(e) {
                // Check if we're still inside the card
                const rect = flipCard.getBoundingClientRect();
                const isInside = (
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom
                );
                
                if (isInside) {
                    cardInstruction.textContent = '_UNHOVER_TO_ENCRYPT_';
                }
            });
        }
    }
});

// ----------------------------------------------------
// COPY PHONE NUMBER FUNCTION
// ----------------------------------------------------
function copyPhone() {
    const phoneNumber = "+63 966 689 3257";
    
    // Modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phoneNumber).then(function() {
            alert("Phone Number Copied: " + phoneNumber);
        }).catch(function(err) {
            console.error('Failed to copy: ', err);
            fallbackCopyPhone(phoneNumber);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyPhone(phoneNumber);
    }
}

function fallbackCopyPhone(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert("Phone Number Copied: " + text);
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        alert("Could not copy phone number");
    }
    
    document.body.removeChild(textArea);
}

// ----------------------------------------------------
// RESPONSIVE ADJUSTMENTS
// ----------------------------------------------------
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 767) {
        menuToggle.classList.remove('active');
        navbar.classList.remove('active');
    }
    
    // Reset card flip on resize
    const flipCardInner = document.querySelector('.flip-card-inner');
    const cardInstruction = document.getElementById('cardInstruction');
    
    if (flipCardInner && window.innerWidth > 767) {
        flipCardInner.classList.remove('flipped');
        
        // Update instruction based on device capability
        const isTouchDevice = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (isTouchDevice) {
            cardInstruction.textContent = '_CLICK_TO_DECRYPT_';
        } else {
            cardInstruction.textContent = '_HOVER_TO_DECRYPT_';
        }
    }
});

// ----------------------------------------------------
// SMOOTH SCROLL FOR ANCHOR LINKS
// ----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});